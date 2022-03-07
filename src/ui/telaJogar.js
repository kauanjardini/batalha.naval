import novoElemento from "../utilidades/novoElemento";
import tabuleiroHtml from "./tabuleiroHtml";
import "./telaJogar.scss";
import telaProxJogador from "./telaProxJogador";
import mostrarTela from "../utilidades/mostrarTela";
import disparo from "../audio/disparo.mp3";
import comemoracao from "../audio/comemoracao.mp3";
import triste from "../audio/triste.mp3";
// eslint-disable-next-line import/no-cycle
import telaVencedor from "./telaVencedor";

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

  const h2 = novoElemento("h2");
  h2.innerText = `Faça uma jogada, ${jogadores[0].name}`;

  div.appendChild(h2);
  const p1 = novoElemento("p");
  p1.innerText = "Atire no seu oponente:";

  const p2 = novoElemento("p");
  p2.innerText = "A situação do seu tabuleiro:";

  const divTab1 = novoElemento("div", "", ["div-tab"]);
  divTab1.appendChild(p1);
  divTab1.appendChild(tabOponente);

  const divTab2 = novoElemento("div", "", ["div-tab"]);
  divTab2.appendChild(p2);
  divTab2.appendChild(tabPessoal);

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

      // verifica se jogador ganhou
      if (tabuleiros[1].allShipsSunked()) {
        div.appendChild(telaVencedor(jogadores[0].name));

        divTab2.removeChild(h2);
        divTab2.appendChild(
          tabuleiroHtml("tabOponente", tabuleiros[0].board())
        );

        const audioComemoracao = new Audio(comemoracao);
        audioComemoracao.play();
      } else if (jogadores[1].type === "code") {
        const jogada = jogadores[1].makeMove(foiAcerto, false, false);
        const atacado = tabuleiros[0].receiveAttack(jogada);

        if (atacado === "hit") {
          // veroifica se pc ganhou
          if (tabuleiros[0].allShipsSunked()) {
            div.removeChild(h2);
            div.appendChild(telaVencedor(jogadores[1].name));

            divTab2.removeChild(divTab2.childNodes[1]);
            divTab2.appendChild(
              tabuleiroHtml("tabOponente", tabuleiros[0].board())
            );

            const audioTriste = new Audio(triste);
            audioTriste.play();
          } else {
            proxTela(true, true);
          }
        } else {
          proxTela(true, false);
        }
      } else {
        btnContinuar.addEventListener("click", () => proxTela(false, false));
        div.appendChild(btnContinuar);
      }
    }
  });

  section.appendChild(div);
  section.appendChild(divTab1);
  section.appendChild(divTab2);

  return section;
}

export default telaJogar;
