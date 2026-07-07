const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.pathname  === window.location.pathname) {
        link.classList.toggle("active-page-link");
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
});

closePopupBtn.addEventListener("click", () => {
    popupContacts.classList.remove("popup-contacts-active");
});

popupContacts.addEventListener("click", () => {
    popupContacts.classList.remove("popup-contacts-active");
});
