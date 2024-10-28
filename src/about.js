// About page Javascript





// IMPORTS ------------------------------------------------------------
import sushiPlateImage from "./images/sushi_plate.jpg";




// METHODS ------------------------------------------------------------
// FUNCTION:    createDivElement()
// DESCRIPTION: <>
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
// DESCRIPTION: <>
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
// DESCRIPTION: <>
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
// DESCRIPTION: <>
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
// DESCRIPTION: <>
function createAboutPage() {
    // NOTE: This function is arranged in DOM tree hierarchy, for 
    // readability

    // "Title" Container, full-width
    createDivElement("content-container-generic","#content");
        // Text container
        createDivElement("image-container-generic",".content-container-generic");
            createImageElement(sushiPlateImage,"image-medium-square","image-medium-square-1","Decorative plate with serving of Sushi Tomi Roll sushi","400px","auto",".image-container-generic");
        // Image container
        createDivElement("text-container-generic",".content-container-generic");
            createTextElement("h2","generic-h2","Real Japanese Food Needs a Real Japanese Touch",".text-container-generic");
            createTextElement("p","generic-p", "In Japan, food is equal parts art, science, sign of affection, and point of honor. Whether served to the most noble of rank or the humblest of upbringings, Japanese food embodies simplicity and freshness of ingredients, perfect preparation, and a flavor palette that simply can't be imitated.",".text-container-generic");
            createTextElement("p", "genericp", "Sushi, ramen, beef bowls, and tempura may seem deceptively simple; but with the right familial touch, they can exceed the expectations of even the most demanding gourmand.",".text-container-generic");
            createTextElement("p", "generic-p", "Enjoy Japanese food the traditional way- prepared by a Japanese family with their ancestral roots planted deep in Central Japan.",".text-container-generic");
    
    // "Reviews Container"     
    createDivElement("review-container-generic", "#content")
        // Text
        createTextElement("h2","generic-h2","Tomodachi | Friends of Sushi Tomi", ".review-container-generic");
        createTextElement("p", "generic-p", "It's not just locals that are raving! Check out some of the reviews from our out-of-town and even out-of-the country friends! Or, if you prefer, heed the words of Japanese natives grateful to have found their favorite comfort foods right in the middle of Central Florida.",".review-container-generic");
        
        // Review card container
        createDivElement("review-card-container", ".review-container-generic");
            createDivElement("review-card-1",".review-card-container");
                createTextElement("p", "generic-p","The food is consistently delicious, the prices are very good, and the staff is always friendly and attentive.", ".review-card-1");
                createTextElement("h4","generic-h4","Joel Jongco",".review-card-1");
            createDivElement("review-card-2",".review-card-container");
                createTextElement("p", "generic-p","What's oishii?  Everything! Sushi Tomi is wonderful and a true gem of Orlando.", ".review-card-2");
                createTextElement("h4","generic-h4","J Ford",".review-card-2");
            createDivElement("review-card-3",".review-card-container");
                createTextElement("p", "generic-p","Amazing sushi! Probably the best sushi in Orlando. Restaurant with so many Japanese customers.", ".review-card-3");
                createTextElement("h4","generic-h4","Paolo Dal Gallo",".review-card-3");
            createDivElement("review-card-4",".review-card-container");
                createTextElement("p", "generic-p","Authentic, delicious, fairly priced. The owners couldn’t be any nicer.", ".review-card-4");
                createTextElement("h4","generic-h4","Briana Cope",".review-card-4");


};





// EXPORTS ------------------------------------------------------------
export {createAboutPage};