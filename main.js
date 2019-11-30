const hamburgerBtnEl = document.getElementById("hamburger-icon");
const mainEl = document.getElementById("main");
const sidebarEl = document.getElementById("sidebar");

const toggleSidebar = e => {
  e.currentTarget.classList.toggle("is-active");
  mainEl.classList.toggle("toggle-main");
  sidebarEl.classList.toggle("toggle-sidebar");
};

hamburgerBtnEl.addEventListener("click", toggleSidebar);
