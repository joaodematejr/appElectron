document.getElementById("myButton").addEventListener("click", handlePage1);

function handlePage1() {
  window.location.assign("../home/index.twig", { message: "bar" });
}
