function city_country(city: string, country: string) : string{
    return`${city} , ${country}`;
}

//calling a function and print the returned value
city_country("karachi", "Pakistan");
console.log(city_country("karachi", "Pakistan"));

city_country("Tokyo", "Japan");
console.log(city_country("Tokyo", "Japan"));

console.log(city_country("Berlin", "Germany"));