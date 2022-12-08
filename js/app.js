const toogle_btn = document.querySelector(".toogle_btn");
const navbar = document.querySelector(".navbar");

toogle_btn.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});

const category = document.querySelector(".categorys__cards");
const prev_btn = document.querySelector(".prev_btn");
const prev_btn2 = document.querySelector(".prev_btn2");
const prev_btn3 = document.querySelector(".prev_btn3");
const prev_btn4 = document.querySelector(".prev_btn4");
const prev_btn5 = document.querySelector(".prev_btn5");

prev_btn.addEventListener("click", () => {
  category.classList.toggle("category-hidden");
});
const category2 = document.querySelector(".ddd");

prev_btn2.addEventListener("click", () => {
  category2.classList.toggle("category-hidden2");
});
const category3 = document.querySelector(".ddd3");

prev_btn3.addEventListener("click", () => {
  category3.classList.toggle("category-hidden3");
});

const category4 = document.querySelector(".ddd4");
prev_btn4.addEventListener("click", () => {
  category4.classList.toggle("category-hidden4");
});

const category5 = document.querySelector(".ddd5");
prev_btn5.addEventListener("click", () => {
  category5.classList.toggle("category-hidden5");
});
