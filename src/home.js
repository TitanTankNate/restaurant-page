// Homepage Javascript
import restaurantInteriorImage from "./images/sushitomi_restaurant_interior.jpg"

const content = document.querySelector("#content");

function createDivElement(elementClass,elementParentSelector) {
    // Select parent element
    const parentElement = document.querySelector(elementParentSelector);

    // Create child element
    const elemToCreate = document.createElement("div");
    elemToCreate.classList.add(elementClass);

    // Append child element to parent
    parentElement.appendChild(elemToCreate);

};

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

// Create elements
function createDynamicDOM() {
    createDivElement("content-container-generic","#content");
    // const contentContainerGeneric = document.createElement("div");
    // contentContainerGeneric.classList.add("content-container-generic");
    // content.appendChild(contentContainerGeneric);

    createDivElement("text-container-generic",".content-container-generic");
    // const textContainerGeneric = document.createElement("div");
    // textContainerGeneric.classList.add("text-container-generic");
    // contentContainerGeneric.appendChild(textContainerGeneric);

    createTextElement("h1","generic-h1","寿し富",".text-container-generic");
    // const genericH1 = document.createElement("h1");
    // genericH1.classList.add("generic-h1");
    // genericH1.textContent = "寿し富";
    // textContainerGeneric.appendChild(genericH1);

    createTextElement("h2","generic-h2","Sushi Tomi",".text-container-generic");
    // const genericH2 = document.createElement("h2");
    // genericH2.classList.add("generic-h2");
    // genericH2.textContent = "Sushi Tomi";
    // textContainerGeneric.appendChild(genericH2);

    createTextElement("p","subtitle-p","Authentic | Local | Oishii",".text-container-generic");
    // const subtitleP = document.createElement("p");
    // subtitleP.classList.add("subtitle-p");
    // subtitleP.textContent = "Authentic | Local | Oishii";
    // textContainerGeneric.appendChild(subtitleP);

    createButtonElement("button-cta-medium","button-cta-medium-1","Discover Oishii",".text-container-generic");
    // const buttonCtaMedium = document.createElement("button");
    // buttonCtaMedium.classList.add("button-cta-medium");
    // buttonCtaMedium.id = "button-cta-medium-1";
    // buttonCtaMedium.textContent = "Discover Oishii";
    // textContainerGeneric.appendChild(buttonCtaMedium);

    createDivElement("image-container-generic",".content-container-generic");
    // const imageContainerGeneric = document.createElement("div");
    // imageContainerGeneric.classList.add("image-container-generic");
    // contentContainerGeneric.appendChild(imageContainerGeneric);

    createImageElement(restaurantInteriorImage,"image-medium-square","image-medium-square-1","Sushi Tomi Restaurant Interior","400px","auto",".image-container-generic");
    // const imgRestaurantInterior = document.createElement("img");
    // imgRestaurantInterior.src = restaurantInteriorImage;
    // imgRestaurantInterior.alt = "Sushi Tomi Restaurant interior";
    // imgRestaurantInterior.style.width = "400px";
    // imgRestaurantInterior.style.height = "auto";
    // imageContainerGeneric.appendChild(imgRestaurantInterior);

    createDivElement("content-container-hero","#content");
    // const contentContainerHero = document.createElement("div");
    // contentContainerHero.classList.add("content-container-hero");
    // content.appendChild(contentContainerHero);

    createTextElement("h2","hero-header-h2","From Central Japan to Central FLorida",".content-container-hero");
    // const heroHeaderH2 = document.createElement("h2");
    // heroHeaderH2.classList.add("hero-header-h2");
    // heroHeaderH2.textContent = "From Central Japan to Central Florida";
    // contentContainerHero.appendChild(heroHeaderH2);

    createTextElement("p","hero-body-p","Sushi Tomi is Japanese food, prepared the Japanese wa, and served with Japanese \"Omotenashi\" (hospitality) that you can't find anywhere else in Central Florida.",".content-container-hero");
    // const heroBodyP = document.createElement("p");
    // heroBodyP.classList.add("hero-body-p");
    // heroBodyP.textContent = "Sushi Tomi is Japanese food, prepared the Japanese wa, and served with Japanese \"Omotenashi\" (hospitality) that you can't find anywhere else in Central Florida.";
    // contentContainerHero.appendChild(heroBodyP);

};

export {createDynamicDOM};