let guestlist = ["Hamza","Usman","Ayesha","Areeba"];

let dontCome = guestlist[0];
console.log(dontCome, "Nahe Aa sakta");

guestlist.splice(0, 1,"Amir");

guestlist.forEach(guest => console.log(`Salam ${guest}, would u like to dinner with me?`));