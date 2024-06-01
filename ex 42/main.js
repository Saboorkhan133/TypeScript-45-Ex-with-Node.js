function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Harry Poter", "Hamza", "Arif"];
show_magicians(magician_names);
var great_magicians = make_great(magician_names);
console.log(great_magicians);
show_magicians(great_magicians);
