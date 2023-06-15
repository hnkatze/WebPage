// Función para abrir la ventana modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    modal.style.opacity = "1";
  }
  
  // Función para cerrar la ventana modal
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.opacity = "0";
    setTimeout(function() {
      modal.style.display = "none";
    }, 300);
  }
  const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');

let carouselWidth = carousel.offsetWidth;

carouselItems.forEach(item => {
  item.style.width = carouselWidth + 'px';
});

carousel.addEventListener('mousemove', e => {
  const x = e.pageX - carousel.offsetLeft;
  const activeIndex = Math.floor(x / carouselWidth);
  
  carouselInner.style.transform = `translateX(-${activeIndex * carouselWidth}px)`;
});
