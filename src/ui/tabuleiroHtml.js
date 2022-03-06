import novoElemento from "../utilidades/novoElemento";

function conteudoDiv(board, x, y, tabId) {
  let div;

  if (board[x] !== undefined && board[x][y].attacked) {
    if (board[x][y].hit) {
      div = novoElemento("div", "", ["acerto"]);
      div.innerText = board[x][y].ship.length;
    } else {
      const icone = novoElemento("i", "", ["fa-solid", "fa-bomb"]);

      div = novoElemento("div", "", ["erro"]);
      div.appendChild(icone);
    }
  } else {
    div = novoElemento("div", `${tabId}-${x}-${y}`);
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
    const x = i;
    p.innerText = linhas[x];
    tabuleiro.appendChild(p);

    for (let j = 0; j < 10; j += 1) {
      let div;
      const y = j;
      if (board.length !== 0) {
        div = conteudoDiv(board, x, y, tabId);
      } else {
        div = novoElemento("div", `${tabId}-${x}-${y}`);
      }
      tabuleiro.appendChild(div);
    }
  }

  return tabuleiro;
}

export default tabuleiroHtml;
