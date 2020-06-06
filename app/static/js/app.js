// Botones
const nuestraIdentidad =document.querySelector("#btn-identity");
const subNuestraIdentidad =document.querySelector("#sub-btn-identity");
const home =document.querySelector("#home");
// Para hacer el toggle
// BOTON PARA SCROLL DESDE EL NAV
nuestraIdentidad.addEventListener("click", (e) => {
    $("html, body").animate({
        scrollTop: $("#cont-identidad").offset().top
    }, 1000)
});
// BOTON PARA SCROLL DESDE LA IMAGEN
subNuestraIdentidad.addEventListener("click", (e) => {
    $("html, body").animate({
        scrollTop: $("#cont-identidad").offset().top
    }, 1000)
});
// Para regresar a home
home.addEventListener("click", (e) => {
    $("html, body").animate({
        scrollTop: $("#scroll-index").offset().top
    }, 1000)
});