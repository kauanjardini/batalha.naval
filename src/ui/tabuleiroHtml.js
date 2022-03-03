import novoElemento from "../utilidades/novoElemento";

function tabuleiroHtml(tabId) {
  const linhas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const tabuleiro = novoElemento("div", "", ["tabuleiro"]);

  for (let i = 0; i <= 10; i += 1) {
    const p = novoElemento("p");
    if (i !== 0) {
      p.innerText = i;
    }
    tabuleiro.appendChild(p);
  }

  for (let i = 0; i < 10; i += 1) {
    const p = novoElemento("p");
    p.innerText = linhas[i];
    tabuleiro.appendChild(p);

    for (let j = 0; j < 10; j += 1) {
      const div = novoElemento("div", `${tabId}-${i}-${j}`);
      tabuleiro.appendChild(div);
    }
  }

  return tabuleiro;
}

export default tabuleiroHtml;
