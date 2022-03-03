import novoElemento from "../utilidades/novoElemento";
import mostrarTela from "../utilidades/mostrarTela";
import "./telaProxJogador.scss";

function telaProxJogador(nomeProx, proxTela) {
  const h2 = novoElemento("h2");
  h2.innerText = `Passe o dispositivo para ${nomeProx}`;

  const p = novoElemento("p");
  p.innerText = "Agora é a vez de seu oponente";

  const btnContinuar = novoElemento("button");
  btnContinuar.innerText = "Continuar";
  btnContinuar.addEventListener("click", () => {
    mostrarTela(proxTela);
  });

  const section = novoElemento("section", "tela-prox-jog");
  section.appendChild(h2);
  section.appendChild(p);
  section.appendChild(btnContinuar);

  return section;
}

export default telaProxJogador;
