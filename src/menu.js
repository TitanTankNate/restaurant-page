// Homepage Javascript





// IMPORTS ------------------------------------------------------------





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
function createMenuPage() {
    // NOTE: This function is arranged in DOM tree hierarchy, for 
    // readability

    
};





// EXPORTS ------------------------------------------------------------
export {createMenuPage};