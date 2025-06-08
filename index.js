// Mostrar / esconder menu lateral
const menuHamburguer = document.getElementById('menuHamburguer');
const menuLateral = document.getElementById('menuLateral');

menuHamburguer.addEventListener('click', () => {
  menuLateral.classList.toggle('mostrar');
  menuHamburguer.classList.toggle('ativo');
});


// Animação dos blocos ao scroll
function animarBlocosAoScroll() {
    const blocos = document.querySelectorAll('.blocoFoto');
    const trigger = window.innerHeight * 0.9;

    blocos.forEach(bloco => {
        const topo = bloco.getBoundingClientRect().top;
        if (topo < trigger) {
            bloco.classList.add('visivel');
        }
    });
}


const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 1,
  spaceBetween: 20
});


window.addEventListener('scroll', animarBlocosAoScroll);
window.addEventListener('load', animarBlocosAoScroll);
