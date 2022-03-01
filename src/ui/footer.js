const Footer = {
  carregarFooter() {
    const d = new Date();
    const p = document.getElementById("footer-p");
    p.innerText = `Adriel Faria, ${d.getFullYear()}`;
  },
};

export default Footer;
