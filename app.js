const headerElement = document.getElementById("header");
const heroSection = document.getElementById("hero");
const togglebutton = document.querySelector(".toggle-btn");

const handleScroll = (event) => {
  const heroHeight = heroSection.clientHeight;

  if (window.scrollY >= heroHeight) {
    headerElement.classList.add("scrolled");
    !togglebutton.classList.contains("btn-close") && togglebutton.click();
  } else {
    headerElement.classList.remove("scrolled");
  }
};

document.addEventListener("scroll", handleScroll);

const uls = document.querySelector(".ul");

togglebutton.addEventListener("click", () => {
  if (uls.classList.contains("hide")) {
    uls.classList.remove("hide");
  } else {
    uls.classList.add("hide");
  }

  if (togglebutton.classList.contains("btn-close")) {
    togglebutton.classList.remove("btn-close");
  } else {
    togglebutton.classList.add("btn-close");
  }
});

// const checkedRadioButton = document.querySelector(
//   "input[name=category]:checked"
// );

// const othercategory = document.querySelector(".other-category");

// const form = document.getElementById("contactUsForm");

// form.addEventListener("change", (event) => {
//   if (event.target.id !== "others") {
//     othercategory.classList.remove("unhide");
//   } else {
//     othercategory.classList.add("unhide");
//   }
// });

const form = document.getElementById("contactUsForm");
const otherCategoryInput = document.getElementById("other-category-input");
const otherCategoryContainer = document.querySelector(".other-category");

form.addEventListener("change", (event) => {
  if (event.target.id !== "others") {
    otherCategoryContainer.classList.remove("unhide");
  } else {
    otherCategoryContainer.classList.add("unhide");
  }
});

form.addEventListener("submit", (event) => {
  const checkedRadioButton = document.querySelector("input[name=category]:checked");
  if (checkedRadioButton && checkedRadioButton.id === "others") {
    otherCategoryInput.name = "category";
  } else {
    otherCategoryInput.name = "otherCategoryValue";
  }
});