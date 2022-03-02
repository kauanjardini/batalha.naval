import novoElemento from "./novoElemento";

function novoCampoForm(labelText, id, atributos = []) {
  const label = novoElemento("label");
  label.innerText = labelText;
  label.setAttribute("for", id);

  const input = novoElemento("input", id);
  atributos.forEach((atributo) => {
    input.setAttribute(atributo[0], atributo[1]);
  });

  const campo = novoElemento("div", "", ["campo-form"]);
  campo.appendChild(label);
  campo.appendChild(input);
  return campo;
}

export default novoCampoForm;
