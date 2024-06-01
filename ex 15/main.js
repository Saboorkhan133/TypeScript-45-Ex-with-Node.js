var guestlist = ["Hamza", "Usman", "Ayesha", "Areeba"];
var dontCome = guestlist[0];
console.log(dontCome, "Nahe Aa sakta");
guestlist.splice(0, 1, "Amir");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would u like to dinner with me?")); });
