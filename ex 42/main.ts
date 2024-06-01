function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

let magician_names = ["Harry Poter","Hamza","Arif"]

show_magicians(magician_names)

let great_magicians = make_great(magician_names);

console.log(great_magicians)

show_magicians(great_magicians)