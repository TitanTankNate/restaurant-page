// Entry point Javascript





// IMPORTS ------------------------------------------------------------
import { createHomePage } from "./home.js";
import { createAboutPage } from "./about.js";
import { createMenuPage } from "./menu.js";
import "./styles.css";




// METHODS ------------------------------------------------------------
// FUNCTION:    clearDOM()
// DESCRIPTION: <>
function clearDOM() {
    const contentToDelete = document.querySelector("#content");
    while (contentToDelete.firstChild) {
        contentToDelete.removeChild(contentToDelete.lastChild);
    };
};





// EVENT HANDLING -----------------------------------------------------
document.body.addEventListener("click", (event) => {
    console.log(event.target.id);

    // Nav buttons
    switch (event.target.id) {
        case "nav-button-1":            // Home
            clearDOM();
            createHomePage();
            break;
        case "nav-button-2":            // About
            clearDOM();
            createAboutPage();
            break;
        case "button-cta-medium-1":     // Discover Oishii |
        case "nav-button-3":            // Menu            |
            clearDOM();
            createMenuPage();
            break;
    };
});


createAboutPage();
