/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Bryan Osorio',
    photo: 'images/profilePic.jpeg',
    favoriteFoods: [
        'Pizza',
        'Fried Chicken',
        'Pasta',
        'French Fries',
        'Cheesecake',
    ],
    hobbies: [
        'Photography',
        'Chess',
        'Travel',
        'Cooking',
    ],
    placesLived: [],  // Don't forget the comma here
};

myProfile.placesLived.push(
    {
        place: 'Washington DC, Virginia',
        length: '15 years',
    },
    {
        place: 'Rexburg, Idaho',
        length: '6 months',
    }
);

/* Populate Profile Object with placesLive objects */



/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').alt = myProfile.photo;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
}
    )

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
}
    )

let dlElement = document.querySelector('#places-lived');

myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;

    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;

    dlElement.appendChild(dt);
    dlElement.appendChild(dd);
}
    );

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


