const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach((toggle) => toggle.addEventListener('change', (e) => onChange(e.target)));

function onChange(clickedItem) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clickedItem) {
      fast.checked = false;
    }

    if (cheap === clickedItem) {
      good.checked = false;
    }

    if (fast === clickedItem) {
      cheap.checked = false;
    }
  }
}
