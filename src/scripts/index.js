import 'regenerator-runtime';
import '../styles/main.css';
import data from '../public/data/DATA.json';

document.querySelectorAll('a, button, input').forEach(e => {
  if (e.offsetWidth < 44 || e.offsetHeight < 44) {
    console.log(e);
  }
});
function toggleDrawer() {
  const drawer = document.getElementById('drawer');
  drawer.classList.toggle('open');
}
document.querySelector('#menu').addEventListener('click', toggleDrawer);

const restaurantList = document.querySelector('.posts');
const skipToContentButton = document.querySelector('.skip-link');

function handleSkipToContent() {
  const mainContent = document.querySelector('main');
  mainContent.focus();
}


skipToContentButton.addEventListener('click', handleSkipToContent);

data.restaurants.forEach((restaurant) => {
  const card = document.createElement('article');
  card.className = 'restaurant-card';

  const image = document.createElement('img');
  image.className = 'post-item__thumbnail';
  image.src = restaurant.pictureId;
  image.alt = restaurant.name;

  const city = document.createElement('p');
  city.className = 'post-item__city';
  city.textContent = restaurant.city;

  const info = document.createElement('div');
  info.className = 'post-item__info';

  const name = document.createElement('h2');
  name.className = 'post-item__name';
  name.textContent = restaurant.name;

  const rating = document.createElement('p');
  rating.className = 'post-item__rating';
  rating.textContent = `Rating: ${restaurant.rating}`;

  const description = document.createElement('p');
  description.className = 'post-item__description';
  description.textContent = restaurant.description;

  info.appendChild(name);
  info.appendChild(rating);
  info.appendChild(description);

  card.appendChild(image);
  card.appendChild(city);
  card.appendChild(info);

  restaurantList.appendChild(card);
});
