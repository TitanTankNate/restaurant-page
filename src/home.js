// Homepage Javascript

const content = document.querySelector("#content");

// Create elements
function createDynamicDOM() {
    const contentContainerGeneric = document.createElement("div");
    contentContainerGeneric.classList.add("content-container-generic");
    content.appendChild(contentContainerGeneric);
    
    const textContainerGeneric = document.createElement("div");
    textContainerGeneric.classList.add("text-container-generic");
    contentContainerGeneric.appendChild(textContainerGeneric);
    
    const genericH1 = document.createElement("h1");
    genericH1.classList.add("generic-h1");
    genericH1.textContent = "寿し富";
    textContainerGeneric.appendChild(genericH1);

    const genericH2 = document.createElement("h2");
    genericH2.classList.add("generic-h2");
    genericH2.textContent = "Sushi Tomi";
    textContainerGeneric.appendChild(genericH2);

    const subtitleP = document.createElement("p");
    subtitleP.classList.add("subtitle-p");
    subtitleP.textContent = "Authentic | Local | Oishii";
    textContainerGeneric.appendChild(subtitleP);

    const buttonCtaMedium = document.createElement("button");
    buttonCtaMedium.classList.add("button-cta-medium");
    buttonCtaMedium.id = "button-cta-medium-1";
    buttonCtaMedium.textContent = "Discover Oishii";
    textContainerGeneric.appendChild(buttonCtaMedium);

    const imageContainerGeneric = document.createElement("div");
    imageContainerGeneric.classList.add("image-container-generic");
    contentContainerGeneric.appendChild(imageContainerGeneric);

    const imgRestaurantInterior = document.createElement("img");
    imgRestaurantInterior.src = "./images/sushitomi_restaurant_interior.jpg";
    imgRestaurantInterior.alt = "Sushi Tomi Restaurant interior";
    imageContainerGeneric.appendChild(imgRestaurantInterior);

    const contentContainerHero = document.createElement("div");
    contentContainerHero.classList.add("content-container-hero");
    content.appendChild(contentContainerHero);

    const heroHeaderH2 = document.createElement("h2");
    heroHeaderH2.classList.add("hero-header-h2");
    heroHeaderH2.textContent = "From Central Japan to Central Florida";
    contentContainerHero.appendChild(heroHeaderH2);

    const heroBodyP = document.createElement("p");
    heroBodyP.classList.add("hero-body-p");
    heroBodyP.textContent = "Sushi Tomi is Japanese food, prepared the Japanese wa, and served with Japanese \"Omotenashi\" (hospitality) that you can't find anywhere else in Central Florida.";
    contentContainerHero.appendChild(heroBodyP);

};

export {createDynamicDOM};