// Menu page Javascript





// IMPORTS ------------------------------------------------------------
import seaBassDish from "./images/seabass_dish.png";
import beefGyuudonDish from "./images/beef_gyuudon_dish.png";
import tunaChirashiDish from "./images/tuna_chirashi_dish.png";



// METHODS ------------------------------------------------------------
// FUNCTION:    createDivElement()
// DESCRIPTION: This function accepts a class specification (singular) 
// and a parent Element, and creates a new HTML <div> element.
function createDivElement(elementClass,elementParentSelector) {
    // Select parent element
    const parentElement = document.querySelector(elementParentSelector);

    // Create child element
    const elemToCreate = document.createElement("div");
    elemToCreate.classList.add(elementClass);

    // Append child element to parent
    parentElement.appendChild(elemToCreate);

};



// FUNCTION:    createTextElement()
// DESCRIPTION: This function accepts a type of text (such as h1, h2, 
// or p), a class specification (singular), the text content itself, 
// and a parent element, and creates a new HTML <text type> element.
function createTextElement(elementType, elementClass, elementTextContent, elementParentSelector) {
    // Select parent element
    const parentElement = document.querySelector(elementParentSelector);

    // Create child element
    const elemToCreate = document.createElement(elementType);
    elemToCreate.classList.add(elementClass);
    elemToCreate.textContent = elementTextContent;

    // Append child element to parent
    parentElement.appendChild(elemToCreate);
};



// FUNCTION:    createButtonElement()
// DESCRIPTION: This function accepts a class specification 
// (singular), an assignable element ID, text content for the button 
// capion, and a parent element, and creates a new HTML <button> 
// element. 
function createButtonElement(elementClass, elementId, elementTextContent, elementParentSelector) {
    // Select parent element
    const parentElement = document.querySelector(elementParentSelector);

    // Create child element
    const elemToCreate = document.createElement("button");
    elemToCreate.classList.add(elementClass);
    elemToCreate.id = elementId;
    elemToCreate.textContent = elementTextContent;

    // Append child element to parent
    parentElement.appendChild(elemToCreate);
};



// FUNCTION:    createImageElement()
// DESCRIPTION: This function accepts the variable name for an 
// imported image path, a class specification (singular), 
// assignable element ID, alternate text for the image, and a 
// parent element, and creates a new HTML <img> element.
function createImageElement(imgImportVar, elementClass, elementID, elementAltText, elementHeight, elementWidth, elementParentSelector) {
    // Select parent element
    const parentElement = document.querySelector(elementParentSelector);
    
    // Create child element
    const elemToCreate = document.createElement("img");
    elemToCreate.src = imgImportVar;
    elemToCreate.classList.add(elementClass);
    elemToCreate.id = elementID;
    elemToCreate.alt = elementAltText;
    
    // Apply element CSS
    elemToCreate.style.width = elementWidth;
    elemToCreate.style.height = elementHeight;
    
    // Append child element to parent
    parentElement.appendChild(elemToCreate);
};



// FUNCTION:    createDynamicDOM()
// DESCRIPTION: This function lays out the dynamic DOM tree, with the 
// intent that this function will be called when the page/tab loads or 
// is reset/refresh.
function createMenuPage() {
    // NOTE: This function is arranged in DOM tree hierarchy, for 
    // readability

    // "Title" container, full-width
    createDivElement("content-container-menu", "#content");
        createTextElement("h2","generic-h2","Osusume | The Chef Recommends", ".content-container-menu");
        
        // "Menu" card container
        createDivElement("menu-card-container", ".content-container-menu");
            // Menu item card 1
            createDivElement("menu-card-item-1",".menu-card-container");
            createImageElement(seaBassDish,"menu-picture-small","menu-picture-1","Chilean Sea Bass","150px", "auto",".menu-card-item-1");
                createTextElement("h3","generic-h3","Miso Chilean Sea Bass",".menu-card-item-1");
                createTextElement("p","generic-p","Savor the delicately salty and wonderfully balanced flavor of Chilean Sea Bass, grilled over open flame, and glazed in a sweet miso sauce.",".menu-card-item-1");
            // Menu item card 2 
            createDivElement("menu-card-item-2",".menu-card-container");
            createImageElement(beefGyuudonDish,"menu-picture-small","menu-picture-2","Beef Gyuudon","150px", "auto",".menu-card-item-2");
                createTextElement("h3","generic-h3","Beef Gyuudon",".menu-card-item-2");
                createTextElement("p","generic-p","Live the salaryman life and kick the post-work party hangover blues with a filling and flavorful beef-and-onion bowl, Sukiyaki-style, heaped on a generous bowl of rice. Now you're ready for round two!",".menu-card-item-2");
            // Menu item card 3
            createDivElement("menu-card-item-3",".menu-card-container");
            createImageElement(tunaChirashiDish,"menu-picture-small","menu-picture-1","Chilean Sea Bass","150px", "auto",".menu-card-item-3");
                createTextElement("h3","generic-h3","Tuna Chirashi",".menu-card-item-3");
                createTextElement("p","generic-p","From the simplicity and humility of Japan's seaside homes comes a simple, yet flavorful combination of tender cuts of fresh, fatty tuna sashimi, paired with Obaasan's (grandma's) vinegar rice. Umai (amazing)!",".menu-card-item-3");
    
};





// EXPORTS ------------------------------------------------------------
export {createMenuPage};