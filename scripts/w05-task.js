/* W05: Programming Tasks */

/* Step 1: Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* Step 2: async displayTemples Function */
const displayTemples = async (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        
        article.appendChild(h3);
        article.appendChild(img);
        
        templesElement.appendChild(article);
    });
};

/* Step 3: async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

/* Step 4: reset Function */
const reset = () => {
    templesElement.innerHTML = ""; // Clear the HTML content inside templesElement
};

/* Step 5: filterTemples Function */
const filterTemples = (temples) => {
    reset(); // Clear displayed list of temples
    
    const filter = document.querySelector("#filtered").value;
    
    switch(filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

/* Step 6: Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

// Call getTemples function to start the application
getTemples();
