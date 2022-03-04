import novoElemento from "../utilidades/novoElemento";

function conteudoDiv(board, i, j, tabId) {
  let div;

  if (board[i][j].attacked) {
    if (board[i][j].hit) {
      div = novoElemento("div", "", ["acerto"]);
      div.innerText = board[i][j].ship.length;
    } else {
      const icone = novoElemento("i", "", ["fa-solid", "fa-bomb"]);

      div = novoElemento("div", "", ["erro"]);
      div.appendChild(icone);
    }
  } else {
    div = novoElemento("div", `${tabId}-${i}-${j}`);
  }

  return div;
}

function tabuleiroHtml(tabId, board = []) {
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
      let div;

      if (board.length !== 0) {
        div = conteudoDiv(board, i, j, tabId);
      } else {
        div = novoElemento("div", `${tabId}-${i}-${j}`);
      }
      tabuleiro.appendChild(div);
    }
  }

  return tabuleiro;
}

export default tabuleiroHtml;
