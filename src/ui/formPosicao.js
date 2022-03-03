import novoCampoForm from "../utilidades/novoCampoForm";
import novoElemento from "../utilidades/novoElemento";

function formPosicao() {
  const linha = novoCampoForm("Linha (A-J):", "linhaInput", [
    ["required", "true"],
    ["maxlength", "1"],
    ["pattern", "[a-jA-J]"],
    ["name", "linha"],
  ]);

  const coluna = novoCampoForm("Coluna (1-10):", "colunaInput", [
    ["tel", "tel"],
    ["required", "true"],
    ["maxlength", "2"],
    ["pattern", "^([1-9]|10)$"],
    ["name", "coluna"],
  ]);

  const verticalInput = novoElemento("input");
  verticalInput.setAttribute("type", "checkbox");
  verticalInput.setAttribute("name", "vertical");
  verticalInput.id = "inputVertical";

  const labelVertical = novoElemento("label");
  labelVertical.innerText = "Posicionar verticalmente";
  labelVertical.setAttribute("for", "inputVertical");

  const vertical = novoElemento("div", "", ["input-check"]);
  vertical.appendChild(verticalInput);
  vertical.appendChild(labelVertical);

  const btnSubmit = novoElemento("button");
  btnSubmit.innerText = "Adicionar";
  btnSubmit.setAttribute("type", "submit");

  const form = novoElemento("form");
  form.appendChild(linha);
  form.appendChild(coluna);
  form.appendChild(vertical);
  form.appendChild(btnSubmit);
  return form;
}

export default formPosicao;
