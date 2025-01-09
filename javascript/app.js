const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const quatre=document.getElementById('quatrebtn');
const jeuxButton = document.getElementById('jeux-button');
jeuxButton.addEventListener('click', function() {
    window.location.href = 'TheoriesDeJeux.html';
});

const quatreButton = document.getElementById('quatrebtn');
quatreButton.addEventListener('click', function() {
    window.location.href = 'QuatreCrisesJeux.html';
});

let counter = 0;
const size = images[0].clientWidth;

document.getElementById('nextBtn').addEventListener('click', () => {
  if (counter >= images.length - 1) return; // son resme ulaşıldığında ileriye gitmesin
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (counter <= 0) return; // ilk resme ulaşıldığında geriye gitmesin
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});



