import { loadHomePage, loadMenuPage, loadContactPage } from "./pageLoader";

const contentDiv = document.getElementById("content");
const navButtons = document.querySelectorAll("#navbar .btn");
let currentPage = "";

function navButtonClick(id) {
    if (currentPage === id) return;
    currentPage = id;
    switch(id) {
        case "home":
            contentDiv.replaceChildren(loadHomePage());
            break;
        case "menu":
            contentDiv.replaceChildren(loadMenuPage());
            break;
        case "contact":
            contentDiv.replaceChildren(loadContactPage());
            break;
    }
}

navButtonClick("home");

navButtons.forEach((item) => {
    item.addEventListener("click", () => {
        navButtonClick(item.getAttribute("id"));
    });
});