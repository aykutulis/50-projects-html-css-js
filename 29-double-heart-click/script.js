const loveMe = document.querySelector('.love-me');
const times = document.getElementById('times');

let clickCount = 0;

loveMe.addEventListener('dblclick', (e) => {
  createHeart(e);
});

function createHeart(e) {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerText = ++clickCount;

  setTimeout(() => heart.remove(), 650);
}
