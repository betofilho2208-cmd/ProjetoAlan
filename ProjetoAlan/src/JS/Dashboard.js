function mostrarInicio() {
    const menuHamburguer = document.querySelector(".menuHamburguer");
    const barraLateral = document.querySelector(".barraLateral");

menuHamburguer.addEventListener("click", () => {
    barraLateral.classList.toggle("abrir");
});
}