const navOpen = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav__menu");
const list = document.querySelector(".nav__list");

navOpen.addEventListener("click", () => {
  const listHeight = list.getBoundingClientRect().height;
  const navHeight = navContainer.getBoundingClientRect().height;

  if (navHeight === 0) {
    navContainer.style["max-height"] = `${listHeight}px`;
  } else {
    navContainer.style["max-height"] = 0;
  }
});
