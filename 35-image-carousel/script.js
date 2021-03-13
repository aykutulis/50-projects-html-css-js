const imgContainer = document.getElementById('img-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const buttons = document.querySelectorAll('.btn');
const images = document.querySelectorAll('#img-container img');

let index = 0;

let interval;

init();

function init() {
  interval = setInterval(run, 2000);
}

function run() {
  index++;
  changeImage();
}

function changeImage() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }

  imgContainer.style.transform = `translateX(${-index * 30}rem)`;
}

nextBtn.addEventListener('click', () => {
  index++;
  changeImage();
});

prevBtn.addEventListener('click', () => {
  index--;
  changeImage();
});

buttons.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    clearInterval(interval);
  });
  button.addEventListener('mouseleave', () => {
    init();
  });
});
