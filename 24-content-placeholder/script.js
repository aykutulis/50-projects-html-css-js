const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImage = document.getElementById('profile_img');
const authorName = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="cat" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, perspiciatis.';
  profileImage.innerHTML =
    '<img src="https://randomuser.me/api/portraits/women/25.jpg" alt="profile" />';
  authorName.innerHTML = 'Artmund Schopreud';
  date.innerHTML = 'Oct 06, 2005';

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
