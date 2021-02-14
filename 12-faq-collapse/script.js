const toggles = document.querySelectorAll('.faq .faq-toggle');
const faqs = document.querySelectorAll('.faq');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    removeActives();
    toggle.parentElement.classList.toggle('active');
  });
});

function removeActives() {
  faqs.forEach((faq) => {
    faq.classList.remove('active');
  });
}
