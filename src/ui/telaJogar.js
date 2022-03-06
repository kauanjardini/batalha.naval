import novoElemento from "../utilidades/novoElemento";
import tabuleiroHtml from "./tabuleiroHtml";
import "./telaJogar.scss";
import telaProxJogador from "./telaProxJogador";
import mostrarTela from "../utilidades/mostrarTela";
import disparo from "../audio/disparo.mp3";

function telaJogar(jogadores, tabuleiros, foiAcerto = false) {
  let jaJogou = false;
  const tabOponente = tabuleiroHtml("tabOponente", tabuleiros[1].board());
  const tabPessoal = tabuleiroHtml("tabPessoal", tabuleiros[0].board());

  const section = novoElemento("section", "tela-jogar");
  const div = novoElemento("div", "", ["info"]);

  function proxTela(code, hit) {
    let tela;
    if (code) {
      tela = telaJogar(jogadores, tabuleiros, hit);
    } else {
      tela = telaJogar(jogadores.reverse(), tabuleiros.reverse());
      tela = telaProxJogador(jogadores[0].name, tela);
    }
    mostrarTela(tela);
  }

  const btnContinuar = novoElemento("button");
  btnContinuar.innerText = "Continuar";

  tabOponente.addEventListener("click", (e) => {
    const id = e.target.id.split("-");

    if (id.length === 3 && !jaJogou) {
      jaJogou = true;

      const audioDisparo = new Audio(disparo);
      audioDisparo.play();

      const board = tabuleiros[1].board();
      const x = Number(id[1]);
      const y = Number(id[2]);

      let icone;
      const ataque = tabuleiros[1].receiveAttack([x, y]);
      if (ataque === "hit") {
        e.target.classList.add("acerto");
        e.target.innerText = board[x][y].ship.length;
      } else if (ataque === "miss") {
        icone = novoElemento("i", "", ["fa-solid", "fa-bomb"]);

        e.target.classList.add("erro");
        e.target.appendChild(icone);
      }

      // verificar se o jogo acabou

      if (jogadores[1].type === "code") {
        const jogada = jogadores[1].makeMove(foiAcerto, false, false);
        const atacado = tabuleiros[0].receiveAttack(jogada);
        if (atacado === "hit") {
          proxTela(true, true);
        } else {
          proxTela(true, false);
        }
      } else {
        btnContinuar.addEventListener("click", () => proxTela(false, false));
        div.appendChild(btnContinuar);
      }
    }
  });

  const h2 = novoElemento("h2");
  h2.innerText = `Faça uma jogada, ${jogadores[0].name}`;

  div.appendChild(h2);
  const p1 = novoElemento("p");
  p1.innerText = "Atire no seu oponente:";

  const p2 = novoElemento("p");
  p2.innerText = "A situação do seu tabuleiro:";

  section.appendChild(div);
  section.appendChild(p1);
  section.appendChild(p2);
  section.appendChild(tabOponente);
  section.appendChild(tabPessoal);

  return section;
}

export default telaJogar;
