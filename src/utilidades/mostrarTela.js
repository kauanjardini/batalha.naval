function mostrarTela(tela) {
  const main = document.querySelector("main");
  if (main.hasChildNodes()) {
    main.removeChild(main.childNodes[0]);
  }
  main.appendChild(tela);
}

export default mostrarTela;
