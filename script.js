const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const totalCards = 10;
let currentIndex = 0;

function updateCarousel() {
  const width = track.offsetWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === totalCards - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);
updateCarousel();