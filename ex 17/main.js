// Creating a Guest List Array
var guestList = ["Hamza", "Usman", "Ayesha", "Areeba",];
//Making Variable for those guest who cant come
var dontcome = guestList[0];
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
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middleindex of array
guestList.splice(middleIndex, 0, "Osama");
console.log("Updated List of our Guest");
//sending a invitation message to our guest one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
//Inform that only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
//using while loop to remove guests from the array until names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry,".concat(removedGuest, " I cant invite you to dinner"));
}
console.log("Invitation to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Lucky ".concat(lasttwo, ", you are still invited to dinner")); });
//removing last two guest from the List
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
