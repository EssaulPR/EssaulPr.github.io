// Botones
// Identidad
const nuestraIdentidad =document.querySelector("#btn-identity");
const subNuestraIdentidad =document.querySelector("#sub-btn-identity");
// servicios
const services =document.querySelector("#btn-services");
const subServices =document.querySelector("#sub-btn-services");
// Contactanos
const contact =document.querySelector("#btn-contact");
// Home
const home =document.querySelector("#home");
// Para hacer el toggle
// BOTON PARA SCROLL DESDE EL NAV
nuestraIdentidad.addEventListener("click", (e) => {
    $("html, body").animate({
        scrollTop: $("#cont-identidad").offset().top
    }, 1500)
});
// BOTON PARA SCROLL DESDE LA IMAGEN
subNuestraIdentidad.addEventListener("click", (e) => {
    $("html, body").animate({
        scrollTop: $("#cont-identidad").offset().top
    }, 1500)
});
// Para regresar a home
home.addEventListener("click", (e) => {
    $("html, body").animate({
        scrollTop: $("#scroll-index").offset().top
    }, 1500)
});
// BOTON PARA SCROLL DESDE EL NAV
services.addEventListener("click", (e) => {
    $("html, body").animate({
        scrollTop: $("#cont-services").offset().top
    }, 1500)
});
// BOTON PARA SCROLL DESDE LA IMAGEN
subServices.addEventListener("click", (e) => {
    $("html, body").animate({
        scrollTop: $("#cont-services").offset().top
    }, 1500)
});
// BOTON PARA SCROLL DESDE EL NAV
contact.addEventListener("click", (e) => {
    $("html, body").animate({
        scrollTop: $("#cont-contact").offset().top
    }, 1500)
});