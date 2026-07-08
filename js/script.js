const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.pathname === window.location.pathname) {
        link.classList.add("active-page-link");
    }
    else {
        link.classList.remove("active-page-link");
    }
});

const popupContacts = document.querySelector("#popup-contacts");
const popupContent = document.querySelector(".popup-content");

const openPopupBtn = document.querySelector("#contact-btn");
const closePopupBtn = document.querySelector("#popup-contacts-btn");

openPopupBtn.addEventListener("click", () => {
    popupContacts.showModal();
    document.body.classList.add("no-scroll");
});

closePopupBtn.addEventListener("click", () => {
    popupContacts.close();
});

popupContacts.addEventListener("click", (e) => {
    const rect = popupContent.getBoundingClientRect();

    if (e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom) 
    {
        popupContacts.close();
    }
});

popupContacts.addEventListener("close", () => {
    document.body.classList.remove("no-scroll");
});

const burger = document.querySelector(".burger");
const burgerBtn = document.querySelector(".burger-btn");

const main = document.querySelector("main");
const navbar = document.querySelector(".navbar");
const footer = document.querySelector("footer");

burgerBtn.addEventListener("click", () => {

    if (burger.classList.contains("burger-active")) {
        burger.classList.remove("burger-active");

        navbar.inert = false;
        main.inert = false;
        footer.inert = false;

        burger.inert = true;
    }
    else {
        burger.classList.add("burger-active");

        navbar.inert = true;
        main.inert = true;
        footer.inert = true;

        burger.inert = false;
    }

    burgerBtn.classList.toggle("burger-btn-active");
    document.body.classList.toggle("no-scroll");
});

const mediaQuery = window.matchMedia("(min-width: 700px)");

function handleScreenChange(e) {
  if (e.matches) {
        navbar.inert = false;
        main.inert = false;
        footer.inert = false;

        burger.inert = true;
  }
  else {
        navbar.inert = true;
        main.inert = true;
        footer.inert = true;

        burger.inert = false;
  }
}

mediaQuery.addEventListener("change", handleScreenChange);

handleScreenChange(mediaQuery);
