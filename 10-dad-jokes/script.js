const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);

async function generateJoke() {
  jokeBtn.disabled = true;
  const config = { headers: { Accept: 'application/json' } };

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();

  jokeEl.innerText = data.joke;
  jokeBtn.disabled = false;
}
