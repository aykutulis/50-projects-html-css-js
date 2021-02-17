const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';
  const target = +counter.getAttribute('data-target');

  setInterval(() => {
    const increment = target / 180;
    counter.innerText = Math.ceil(+counter.innerText + increment);

    if (+counter.innerText > target) {
      counter.innerText = target;
      clearInterval();
    }
  }, 5);
});
