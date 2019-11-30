const hamburgerBtnEl = document.getElementById("hamburger-icon");
const mainEl = document.getElementById("main");
const sidebarEl = document.getElementById("sidebar");
const textProgressTwo = document.getElementById("textProgressTwo");
const textProgressBarElements = document.getElementsByClassName(
  "text-progress"
);

const toggleSidebar = e => {
  e.currentTarget.classList.toggle("is-active");
  mainEl.classList.toggle("show-main");
  sidebarEl.classList.toggle("hide-sidebar");
};

const showProgressCircle = () => {
  if (textProgressTwo.textContent === "0%") {
    textProgressTwo.textContent = "Not started";
  }
};

hamburgerBtnEl.addEventListener("click", toggleSidebar);

let circleProgress_one = new progressBar({
  type: "circle", //top, circle
  targetId: "roundProgressOne",
  textId: "textProgressOne",
  value: 66, //final value
  duration: 2000, //ms
  completeDuration: 500 //ms
});
let circleProgress_two = new progressBar({
  type: "circle", //top, circle
  targetId: "roundProgressTwo",
  textId: "textProgressTwo",
  value: 0, //final value
  duration: 2000, //ms
  completeDuration: 500 //ms
});

circleProgress_one.complete(showProgressCircle);
circleProgress_two.complete(showProgressCircle);

const removeProgressBar = textProgressBars => {
  for (let item of textProgressBars) {
    console.log(item.textContent);
    if (item.textContent === "0%") {
      item.parentElement.insertAdjacentHTML(
        "afterbegin",
        "<p style='margin: 10rem 0 0 1rem;'>Not started</p>"
      );
      item.remove();
    }
  }
};
setTimeout(() => {
  removeProgressBar(textProgressBarElements);
}, 100);
