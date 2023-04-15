console.log("Cześć Developer! Pzdr600!")

let headerButton = document.querySelector(".js-button");
let header = document.querySelector(".js-header");
let lowTitle = document.querySelector(".js-lowTitle");
let title = document.querySelector(".js-title");
let themeName = document.querySelector(".js-themeName");
let container = document.querySelector(".js-container");
let mainPart = document.querySelector(".js-main");
let link = document.querySelector(".js-link");

headerButton.addEventListener("click", () => {
  header.classList.toggle("darkTheme");
  lowTitle.classList.toggle("darkTheme");
  title.classList.toggle("darkTheme");
  mainPart.classList.toggle("darkTheme");
  link.classList.toggle("darkTheme");

  themeName.innerText = title.classList.contains("darkTheme")
    ? "jasny"
    : "ciemny";
});

let removeTableButton = document.querySelector(".js-removeTableButton");
let table = document.querySelector(".js-table");

removeTableButton.addEventListener("click", () => {
  table.remove();
  removeTableButton.remove();
});


