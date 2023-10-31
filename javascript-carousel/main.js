const leftArrow = document.querySelector('.fa-chevron-left');
const rightArrow = document.querySelector('.fa-chevron-right');
const imageElement = document.querySelector('.column-one-half img');

const images = [
  {
    src: './images/001.png',
    alt: 'Image 1',
  },
  {
    src: './images/004.png',
    alt: 'Image 2',
  },
  {
    src: './images/007.png',
    alt: 'Image 3',
  },
  {
    src: './images/025.png',
    alt: 'Image 4',
  },
  {
    src: './images/039.png',
    alt: 'Image 5',
  },
];

let currentIndex = 0;

function updateCurrentImage() {
  imageElement.src = images[currentIndex].src;
  imageElement.alt = images[currentIndex].alt;
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCurrentImage();
}

function startCarousel() {
  showNextImage();
  setInterval(showNextImage, 3000);
}

startCarousel();

rightArrow.addEventListener('click', () => {
  currentIndex++;
  // reset the picture index back to 0 when it reaches the last image
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  console.log(currentIndex);
  imageElement.src = images[currentIndex].src;
  imageElement.alt = images[currentIndex].alt;
});

leftArrow.addEventListener('click', () => {
  currentIndex--;
  // if (currentIndex <= images.length) {
  //   currentIndex = ;
  // }

  if (currentIndex === 0) {
    currentIndex = images.length;
  }
  console.log('Backwards', currentIndex);

  imageElement.src = images[currentIndex].src;
  imageElement.alt = images[currentIndex].alt;
});

// leftArrow.addEventListener('click', () => {});
