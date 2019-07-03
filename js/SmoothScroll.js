// This js file is to close the navigation bar when one of the links is clicked
//to stimulate a smooth scroller

const navigation = document.querySelector(".navigation");
const navCheckbox = document.querySelector(".navigation__checkbox");
const navItems = document.querySelectorAll("navigation__item");
navItems.forEach(item =>
  item.addEventListener("click", _ => (navCheckbox.checked = false))
);

console.log("this is working?");
