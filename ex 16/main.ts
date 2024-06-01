// Creating a Guest List Array
let guestList = ["Hamza","Usman","Ayesha","Areeba",];

//Making Variable for those guest who cant come
let dontcome = guestList[0];
// print the name of guest who cant come
console.log(dontcome, "Nahe Aa Sakty Hain");
//Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Amir");
//Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner");
//Adding a new value at starting index of array

guestList.unshift("Ali");
//Adding a new value at ending index of array
guestList.push("Zain");

//Add one new value a middle index of array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest to middleindex of array
guestList.splice(middleIndex, 0, "Osama");

console.log("Updated List of our Guest");
//sending a invitation message to our guest one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`))


