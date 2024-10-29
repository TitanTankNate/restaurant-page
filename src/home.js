// Homepage Javascript





// IMPORTS ------------------------------------------------------------
import restaurantInteriorImage from "./images/sushitomi_restaurant_interior.jpg"





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
function createImageElement(imgImportVar, elementClass, elementID, elementAltText, elementParentSelector) {
    // Select parent element
    const parentElement = document.querySelector(elementParentSelector);
    
    // Create child element
    const elemToCreate = document.createElement("img");
    elemToCreate.src = imgImportVar;
    elemToCreate.classList.add(elementClass);
    elemToCreate.id = elementID;
    elemToCreate.alt = elementAltText;
        
    // Append child element to parent
    parentElement.appendChild(elemToCreate);
};



// FUNCTION:    createDynamicDOM()
// DESCRIPTION: This function lays out the dynamic DOM tree, with the 
// intent that this function will be called when the page/tab loads or 
// is reset/refresh.
function createHomePage() {
    // NOTE: This function is arranged in DOM tree hierarchy, for 
    // readability

    // "Title" container, full-width
    createDivElement("content-container-generic","#content");
        // Text container
        createDivElement("text-container-generic",".content-container-generic");
            createTextElement("h1","generic-h1","寿し富",".text-container-generic");
            createTextElement("h2","generic-h2","Sushi Tomi",".text-container-generic");
            createTextElement("p","subtitle-p","Authentic | Local | Oishii",".text-container-generic");
            createButtonElement("button-cta-medium","button-cta-medium-1","Discover Oishii",".text-container-generic");
        
        // Image container
        createDivElement("image-container-generic",".content-container-generic");
            createImageElement(restaurantInteriorImage,"image-medium-square","image-medium-square-1","Sushi Tomi Restaurant Interior",".image-container-generic");
    
    // "Hero" container, full-width
    createDivElement("content-container-hero","#content");
        createTextElement("h2","hero-header-h2","From Central Japan to Central Florida",".content-container-hero");
        createTextElement("p","hero-body-p","Sushi Tomi is Japanese food, prepared the Japanese way, and served with Japanese \"Omotenashi\" (hospitality) that you can't find anywhere else in Central Florida.",".content-container-hero");

    };





// EXPORTS ------------------------------------------------------------
export {createHomePage};