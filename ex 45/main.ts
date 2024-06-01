function Create_Car(manufacturer, model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model
    };
options.forEach(options => {
    let [key, value] = options.split(":");
    car[key.trim()] = value.trim();
});

return car;
}

let my_car = Create_Car("Toyota","Corrolla", "colour: Black","Sunroof: True");

console.log(my_car);

