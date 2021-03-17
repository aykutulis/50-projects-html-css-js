const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
  const value = e.target.value;
  const length = value.length;
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
