import novoElemento from "../utilidades/novoElemento";

function Erros() {
  const div = novoElemento("div", "", ["erros-msgs"]);

  function novaMensagem(mensagem = "") {
    const p = novoElemento("p");
    p.innerText = mensagem;

    const msg = novoElemento("div", "", ["mensagem"]);

    const fechar = novoElemento("i", "", ["fa-solid", "fa-xmark"]);
    fechar.addEventListener("click", () => {
      div.removeChild(msg);
      if (!div.hasChildNodes()) {
        div.style.display = "none";
      }
    });

    msg.appendChild(p);
    msg.appendChild(fechar);

    div.appendChild(msg);
    div.style.display = "flex";
  }

  return { elemento: div, novaMensagem };
}

export default Erros;
