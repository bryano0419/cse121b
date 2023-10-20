/* W05: Programming Tasks */

/* Declare and initialize global variables */
// const templesElement = document.querySelector('#temples')

/* async displayTemples Function */
const displayTemples = (temples) => { 
    temples.forEach((temple) => {
    let article = document.createElement('article');
    
    let templeName = document.createElement('h3');    
    templeName.textContent = temple.templeName

    let location = document.createElement('p');
    location.textContent = temple.location

    let img = document.createElement('img');
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', temple.templeName);

    article.appendChild(templeName);
    article.appendChild(img);

    document.querySelector("#temples").appendChild(article);
    // templesElement.appendChild(article);
   
    })
    
    
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );
    templeList = await response.json();
    displayTemples(templeList);

};

getTemples();

/* reset Function */

const reset = () => {
    document.querySelector("#temples").innerHTML = "";
};

/* sortBy Function */
const sortBy = () => {
    reset();
  
    let filter = document.querySelector("#sortBy").value;
    let filteredTemples;
  
    switch (filter) {
      case "utah":
        filteredTemples = templeList.filter((temple) => temple.location.includes("Utah"));
        break;
      case "notutah":
        filteredTemples = templeList.filter((temple) => !temple.location.includes("Utah"));
        break; 
      case "older":
        filteredTemples = templeList.filter((temple) => {
          const dedicatedDate = new Date(temple.dedicated);
          const cutoffDate = new Date("1950-01-01");
        
          return dedicatedDate < cutoffDate;
        })
        break;
      case "all": 
        filteredTemples = templeList; 
        break; 

    
    }
  
   
    displayTemples(filteredTemples);
  };


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });



