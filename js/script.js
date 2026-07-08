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

popupContent.addEventListener("click", (event) => {
    event.stopPropagation();
});

openPopupBtn.addEventListener("click", () => {
    popupContacts.classList.add("popup-contacts-active");

    document.body.classList.add("popup-open");
});

closePopupBtn.addEventListener("click", () => {
    popupContacts.classList.remove("popup-contacts-active");

    document.body.classList.remove("popup-open");
});

popupContacts.addEventListener("click", () => {
    popupContacts.classList.remove("popup-contacts-active");

    document.body.classList.remove("popup-open");
});

const burger = document.querySelector(".burger");
const burgerBtn = document.querySelector(".burger-btn");

burgerBtn.addEventListener("click", () => {
    burger.classList.toggle("burger-active");
    burgerBtn.classList.toggle("burger-btn-active");

    document.body.classList.toggle("popup-open");
});
