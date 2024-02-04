/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};

/* Populate Profile Object with placesLive objects */
myProfile.name = "Tayler Sue Hickman";
myProfile.photo = "images/tsue.png";

myProfile.favoriteFoods = [
    'Rice',
    'Beef',
    'Veggies',
    'Oreos',
    'Ice cream'
];

myProfile.hobbies = [
    'Cooking', 'Reading', 'Traveling'
];

myProfile.placesLived = [];

myProfile.placesLived.push({
    place: "San Diego",
    length: "2 years",
});

myProfile.placesLived.push({
    place: "Rexburg",
    length: "1 year",
});

/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myProfile.name;

document.querySelector('#photo').src = myProfile.photo;

myProfile.favoriteFoods.forEach(food => {

    let li = document.createElement('li');

    li.textContent = food;

    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});



