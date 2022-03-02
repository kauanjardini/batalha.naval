function novoElemento(tag, id = "", classes = []) {
  const e = document.createElement(tag);
  e.id = id;
  e.classList.add(...classes);
  return e;
}

export default novoElemento;
