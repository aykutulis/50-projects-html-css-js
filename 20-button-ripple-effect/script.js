const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', clickEvent);
});

function clickEvent(e) {
  const x = e.clientX;
  const y = e.clientY;

  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  const buttonX = x - buttonLeft;
  const buttonY = y - buttonTop;

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.top = buttonY + 'px';
  circle.style.left = buttonX + 'px';

  this.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
}
