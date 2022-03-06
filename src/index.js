import Footer from "./ui/footer";
import "./index.scss";
import mostrarTela from "./utilidades/mostrarTela";
import telaInicio from "./ui/telaInicio";
import ondas from "./audio/waves.mp3";
import novoElemento from "./utilidades/novoElemento";

const audio = new Audio(ondas);
audio.loop = true;
audio.play();

const btnAudio = document.getElementById("btnSound");
btnAudio.addEventListener("click", () => {
  let icone;
  if (btnAudio.classList.contains("tocando")) {
    audio.pause();
    icone = novoElemento("i", "", ["fa-solid", "fa-volume-xmark"]);
  } else {
    audio.play();
    icone = novoElemento("i", "", ["fa-solid", "fa-volume-high"]);
  }
  btnAudio.classList.toggle("tocando");
  btnAudio.removeChild(btnAudio.childNodes[0]);
  btnAudio.appendChild(icone);
});

mostrarTela(telaInicio());

Footer.carregarFooter();
