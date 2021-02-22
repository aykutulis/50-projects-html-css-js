const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', () => {
  const html = document.querySelector('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    toggle.innerText = 'Dark Mode';
  } else {
    html.classList.add('dark');
    toggle.innerText = 'Light Mode';
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${(360 * hoursForClock) / 12}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${(360 * minutes) / 60}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${(360 * seconds) / 60}deg)`;

  if (secondEl.style.transform === 'translate(-50%, -100%) rotate(0deg)') {
    secondEl.style.transition = 'none';
  } else {
    secondEl.style.transition = 'all 0.5s ease-in';
  }

  timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();
setInterval(setTime, 1000);
