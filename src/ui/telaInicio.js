import novoElemento from "../utilidades/novoElemento";

function telaInicio() {
  const h2 = document.createElement("h2");
  h2.innerText = "Olá marujo, contra quem deseja batalhar?";

  const pPC = novoElemento("p");
  pPC.innerText = "Computador";

  const pPessoa = novoElemento("p");
  pPessoa.innerText = "Outro marujo";

  const iconeRobo = novoElemento("i", "", ["bi", "bi-robot"]);
  const iconePessoa = novoElemento("i", "", ["bi", "bi-person-circle"]);

  const escolhaPC = novoElemento("button", "", ["escolha"]);
  escolhaPC.appendChild(iconeRobo);
  escolhaPC.appendChild(pPC);
  escolhaPC.addEventListener("click", () => {});

  const escolhaPessoa = novoElemento("button", "", ["escolha"]);
  escolhaPessoa.appendChild(iconePessoa);
  escolhaPessoa.appendChild(pPessoa);
  escolhaPessoa.addEventListener("click", () => {});

  const escolhas = novoElemento("div", "", ["escolhas"]);
  escolhas.appendChild(escolhaPC);
  escolhas.appendChild(escolhaPessoa);

  const div = novoElemento("div", "", ["pergunta"]);
  div.appendChild(h2);
  div.appendChild(escolhas);

  const section = novoElemento("section", "boas-vindas");
  section.appendChild(div);
  return section;
}

export default telaInicio;
