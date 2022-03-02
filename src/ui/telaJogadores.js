import "./telaJogadores.scss";
import novoElemento from "../utilidades/novoElemento";
import novoCampoForm from "../utilidades/novoCampoForm";

function formJogador(tituloForm, oponentePessoa) {
  const campoNome = novoCampoForm("Informe seu nome:", "inputNome", [
    ["type", "text"],
    ["name", "nome"],
    ["minlength", "3"],
    ["required", "true"],
  ]);

  const btnSubmit = novoElemento("button");
  btnSubmit.setAttribute("type", "submit");
  btnSubmit.innerText = "Salvar";

  const form = novoElemento("form");
  form.appendChild(campoNome);

  if (oponentePessoa) {
    const campoNome2 = novoCampoForm(
      "Informe o nome de seu oponente:",
      "inputNome2",
      [
        ["type", "text"],
        ["name", "nome"],
        ["minlength", "3"],
        ["required", "true"],
      ]
    );
    form.appendChild(campoNome2);
  }

  form.appendChild(btnSubmit);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const h3 = novoElemento("h3");
  h3.innerText = tituloForm;

  const div = novoElemento("div", "", ["form-jogador"]);

  div.appendChild(h3);
  div.appendChild(form);

  return div;
}

function telaJogadores(oponentePessoa = false) {
  let form;
  if (oponentePessoa) {
    form = formJogador("Como devo lhes chamar, marujos?", oponentePessoa);
  } else {
    form = formJogador("Como devo lhe chamar, marujo?", oponentePessoa);
  }

  const section = novoElemento("section", "tela-participantes");
  section.appendChild(form);
  return section;
}

export default telaJogadores;
