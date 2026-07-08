// Active page link
const links = document.querySelectorAll(
    ".navbar-navigation a, .menu-list a"
);

links.forEach(link => {
    const current = window.location.pathname === '/' 
        ? "/index.html" 
        : window.location.pathname.replace("/personal-portfolio", "");

    link.classList.toggle(
        "active-page-link",
        link.pathname.replace("/personal-portfolio", "") === current
    );
});

// Popup contacts
const popupContacts = document.querySelector("#popup-contacts");
const popupContent = document.querySelector(".popup-content");
const openPopupBtn = document.querySelector("#contact-btn");
const closePopupBtn = document.querySelector("#popup-contacts-btn");

const toggleScroll = (state) => {
    document.body.classList.toggle("no-scroll", state);
};

openPopupBtn.addEventListener("click", () => {
    popupContacts.showModal();
    toggleScroll(true);
});

closePopupBtn.addEventListener("click", () => {
    popupContacts.close();
});

popupContacts.addEventListener("click", (e) => {
    const isOutside = !popupContent.contains(e.target);

    if (isOutside) {
        popupContacts.close();
    }
});

popupContacts.addEventListener("close", () => {
    toggleScroll(false);
});


// Burger menu
const burger = document.querySelector(".burger");
const burgerBtn = document.querySelector(".burger-btn");

const main = document.querySelector("main");
const navbar = document.querySelector(".navbar");
const footer = document.querySelector("footer");

const pageElements = [
    navbar,
    main,
    footer
];

const toggleInert = (state) => {
    pageElements.forEach(element => {
        element.inert = state;
    });

    burger.inert = !state;
};

const toggleBurger = () => {
    const isActive = burger.classList.toggle("burger-active");

    burgerBtn.classList.toggle("burger-btn-active", isActive);
    toggleScroll(isActive);
    toggleInert(isActive);
};

burgerBtn.addEventListener("click", toggleBurger);


// Responsive behavior
const mediaQuery = window.matchMedia("(min-width: 700px)");

const handleScreenChange = (e) => {
    if (e.matches) {
        burger.classList.remove("burger-active");
        burgerBtn.classList.remove("burger-btn-active");

        toggleScroll(false);
        toggleInert(false);
    }
    else {
        toggleInert(true);
    }
};

mediaQuery.addEventListener("change", handleScreenChange);

handleScreenChange(mediaQuery);