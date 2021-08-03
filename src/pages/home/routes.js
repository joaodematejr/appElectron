document.getElementById("myButton").addEventListener("click", handlePage2);

const twig = require("twig");

function handlePage2() {
  twig.renderFile('../home2/index.twig', {foo:'bar'})
  //window.location.assign("", { message: "bar" });
}
