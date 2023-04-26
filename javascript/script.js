{
  const welcome = () => {
    console.log("Cześć Developer! Pzdr600!");
  };

  const toggleBackground = () => {
    const header = document.querySelector(".js-header");
    const lowTitle = document.querySelector(".js-lowTitle");
    const title = document.querySelector(".js-title");
    const themeName = document.querySelector(".js-themeName");
    const mainPart = document.querySelector(".js-main");
    const link = document.querySelector(".js-link");
    header.classList.toggle("darkTheme");
    lowTitle.classList.toggle("darkTheme");
    title.classList.toggle("darkTheme");
    mainPart.classList.toggle("darkTheme");
    link.classList.toggle("darkTheme");

    themeName.innerText = title.classList.contains("darkTheme")
      ? "jasny"
      : "ciemny";
  };

  const removeButtonClick = () => {
    const table = document.querySelector(".js-table");
    table.remove();
    removeTableButton.remove();
  };

  const removeTableButton = document.querySelector(".js-removeTableButton");

  const init = () => {
    const headerButton = document.querySelector(".js-button");
    headerButton.addEventListener("click", toggleBackground);
    removeTableButton.addEventListener("click", removeButtonClick);

    welcome();
  };

  init();
}
