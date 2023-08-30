// Functions
function greetUser() {
    const name = prompt("What's your name?");
    console.log(`Hello, ${name}!`);
}
greetUser();

// Math
function sub(){
    const a = parseFloat(prompt("Enter a number: "));
    const b = parseFloat(prompt("Enter another number: "));

    console.log(a - b);
}
sub();

// Constant for my birthyear
const birthYear = 2003;

// Array of favorite food
const favoriteFoods = ["Dosa", "Chaat", "Pizza"];

// Book
const book = {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    publicationYear: 2011
}

console.log(birthYear)
console.log(favoriteFoods); 
console.log(book)