const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwtich = body.querySelector(".toggle-switch"),
  modeTest = body.querySelector(".mode-text");



let links = body.querySelectorAll(".nav-link"),
  navtext = body.querySelectorAll(".nav-text");

function toggleActiveClasses(
  linkElements,
  textElements,
  activeLinkClass,
  activeTextClass
) {
  linkElements.forEach((link, index) => {
    link.addEventListener("click", () => {
      
      linkElements.forEach((l) => l.classList.remove(activeLinkClass));
      textElements.forEach((t) => t.classList.remove(activeTextClass));

      
      link.classList.add(activeLinkClass);
      textElements[index].classList.add(activeTextClass); // Match by index
    });
  });

  textElements.forEach((text, index) => {
    text.addEventListener("click", () => {
      
      textElements.forEach((t) => t.classList.remove(activeTextClass));
      linkElements.forEach((l) => l.classList.remove(activeLinkClass));

      
      text.classList.add(activeTextClass);
      linkElements[index].classList.add(activeLinkClass); // Match by index
    });
  });
}


toggleActiveClasses(links, navtext, "active-link", "active-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwtich.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeTest.innerText = "Light Mode";
  } else {
    modeTest.innerText = "Dark Mode";
  }
});


