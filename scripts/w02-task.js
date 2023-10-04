/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Bryan Osorio";
let currentYear = "2023";
let profilePicture = "images/profilePic.jpeg";

/* Step 3 - Element Variables */
let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.getElementById("year");
let imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
const profilePic = "images/profilePic.jpeg";
document.querySelector("img").setAttribute("src", profilePic);



/* Step 5 - Array */

let favoriteFoods = ["Pizza", "Beef", "Pasta"];
document.querySelector('#food').textContent = favoriteFoods.join(", "); 
imageElement.setAttribute("alt", `Profile image of ${fullName}`);
foodElement.textContent = favoriteFoods.join(", ");

let favoriteFoods2 = favoriteFoods.slice(); 
const otherFood = "Cheesecake";
favoriteFoods2.push(otherFood);
foodElement.innerHTML += `<br>${favoriteFoods2.join(", ")}`;

const secondList = favoriteFoods2.slice(); 
secondList.shift(); 
foodElement.innerHTML += `<br>${secondList.join(", ")}`;


foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

