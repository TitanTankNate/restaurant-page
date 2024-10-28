// Entry point Javascript

import { createHomePage } from "./home.js";
import { createAboutPage } from "./about.js";
import { createMenuPage } from "./menu.js";

console.log("index.js running.");
createHomePage();

function clearDOM() {
    const contentToDelete = document.querySelector("#content");
    while (contentToDelete.firstChild) {
        contentToDelete.removeChild(contentToDelete.lastChild);
    };
};

// Event handling
document.body.addEventListener("click", (event) => {
    console.log(event.target.id);

    // Nav buttons
    switch (event.target.id) {
        case "nav-button-1":
            clearDOM();
            createHomePage();
            break;
        case "nav-button-2":
            clearDOM();
            createAboutPage();
            break;
        case "button-cta-medium-1":
        case "nav-button-3":
            clearDOM();
            createMenuPage();
            break;
    }
})