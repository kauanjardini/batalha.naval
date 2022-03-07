import novoElemento from "../utilidades/novoElemento";
import mostrarTela from "../utilidades/mostrarTela";
import "./telaVencedor.scss";
// eslint-disable-next-line import/no-cycle
import telaInicio from "./telaInicio";

function telaVencedor(nomeVencedor) {
  const h2 = novoElemento("h2");
  h2.innerText = `${nomeVencedor} venceu!`;

  const btnJogarDenovo = novoElemento("button");
  btnJogarDenovo.innerText = "Jogar de novo";
  btnJogarDenovo.addEventListener("click", () => {
    mostrarTela(telaInicio());
  });

  const section = novoElemento("section", "tela-vencedor");
  section.appendChild(h2);
  section.appendChild(btnJogarDenovo);
  return section;
}

export default telaVencedor;
