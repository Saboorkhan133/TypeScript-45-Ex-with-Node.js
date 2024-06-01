//define veriable
let apple = "apple";
let uppercaseApple ="APPLE"
let ten = 10;
let twenty = 20;

let fruits = ["apple", "banana", "orange",];

//Test fo equality and inequality with string

console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("Is apple is not equal to apple?");
console.log(apple !="apple");

//test using lowercase function
console.log("\nIs APPLE is equal to apple after convertng to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after convertng to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");


//numerical tests

console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

console.log("\n Is ten isnot equal to twenty?");
console.log(ten != twenty);

console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

//less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);

//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

//Less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);
//Part 2 ex 24
//Tests using "and" && Operators
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

//Tests using "or"|| Operators
console.log("\n twenty is not greater than 50 and twenty is equal to 20");
console.log(twenty > 50 || 20 == 20);

console.log("\n twenty is not greater than 50 or twenty is not equal to 20");
console.log(twenty > 50 || 20 != 20);


//part 3  test wether an item is include in array
console.log("\n is orange include in my fruits array");
console.log(fruits.includes("orange"));

//not include
console.log("\n is orange not include in my fruits array");
console.log(!fruits.includes("orange"));