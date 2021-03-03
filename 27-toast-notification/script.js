const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four'];
const types = ['success', 'info', 'danger', 'warning'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type || getRandom(types));
  notif.innerText = message || getRandom(messages);
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
