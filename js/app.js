const elements = {
  burger: document.querySelector('.burger'),
  nav: document.querySelector('.nav'),
};

const toggleBurger = () => {
  if (elements.burger.classList.contains('active')) {
    elements.nav.classList.add('hide');
    elements.burger.classList.remove('active');
  } else {
    elements.nav.classList.remove('hide');
    elements.burger.classList.add('active');
  }
};

elements.burger.addEventListener('click', toggleBurger);
