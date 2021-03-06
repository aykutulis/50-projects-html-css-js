const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = 'Hi there!';
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
  let value = e.target.value;
  if (value > 5) {
    value = 5;
  } else if (value < 1) {
    value = 1;
  }
  speed = 300 / value;
});
