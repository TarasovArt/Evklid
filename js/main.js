const burger = document?.querySelector('[data-burger]'),
  nav = document?.querySelector('[data-nav]'),
  body = document.body,
  navItems = nav?.querySelectorAll('a');

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs__item');
let tabsBackground = document.querySelector('.tabs__backgroung');
// Burger

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('header-nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('header-nav--visible');
  })
});

//Search

let searchBtn = document.querySelector('.search-btn');
let search = document.querySelector('.search');
let serchBtnClose = document.querySelector('.search__close');

searchBtn.addEventListener('click', () => {
  search.classList.add('search--active');
  document.querySelector('.search__input').tabIndex = 0;
  document.querySelector('.search__close').tabIndex = 0;
});

serchBtnClose.addEventListener('click', () => {
  search.classList.remove('search--active');
  document.querySelector('.search__input').tabIndex = -1;
  document.querySelector('.search__close').tabIndex = -1;
});

// Tabs

tabsBtn.forEach((element) => {
  element.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach((btn) => {
      btn.classList.remove('tabs-nav__btn_active');
    });
    e.currentTarget.classList.add('tabs-nav__btn_active');

    tabsItem.forEach((element) => {
      element.classList.remove('tabs__item_active');

      tabsBackground.classList.remove('tabs__item-bg1');
      tabsBackground.classList.remove('tabs__item-bg2');
      tabsBackground.classList.remove('tabs__item-bg3');
      tabsBackground.classList.remove('tabs__item-bg4');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item_active');

    switch (path) {
      case "step-one": tabsBackground.classList.add('tabs__item-bg1');
        break;
      case "step-two": tabsBackground.classList.add('tabs__item-bg2');
        break;
      case "step-three": tabsBackground.classList.add('tabs__item-bg3');
        break;
      case "step-four": tabsBackground.classList.add('tabs__item-bg4');
        break;
    };
  });
});

// Swiper

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  a11y: {
    firstSlideMessage: 'Первый слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});

// Accordion

new Accordion('.accordion');

let accordionBtn = document?.querySelectorAll('.accordion__header');
let accordionIcon = document?.querySelectorAll('.accordion__icon');

accordionBtn.forEach((element) => {
  element.addEventListener('click', (a) => {
    const path = a.currentTarget.dataset.path;
    let elementClick = document.querySelector(`[data-target="${path}"]`);

    if (elementClick.classList.contains('accordion__item_active')) {
      elementClick.classList.remove('accordion__item_active');
    } else {
      accordionIcon.forEach((el) => {
        el.classList.remove('accordion__item_active');
      });
      elementClick.classList.add('accordion__item_active');
    };
  });
});
