/* 8.1 First declare at least four variables and assign them different data types.
8.2 For each variable write a console.log statement that logs the value */

let myFavoriteFruit = "Banana";//string
console.log (myFavoriteFruit);
let myFavoriteNumber = 2;//number
console.log (myFavoriteNumber);
let myFavoriteCars = ["Mercedes", "Aston Martin"];//array
console.log (myFavoriteCars);
let myFavoriteBoolean = true; //boolean
console.log (myFavoriteBoolean);

/* 8.3 Now write a console.log statement wherein you first explain 
in words what you think the type of your variables is.*/

console.log ("The type of myFavoriteFruit is: String");
console.log ("The type of myFavoriteNumber is: number");
console.log ("The type of myFavoriteCars is: array");
console.log ("The type of myFavoriteBoolean is: boolean");

/*8.4 Now use typeof to log the actual type of your variables. */

console.log(typeof myFavoriteFruit);
console.log(typeof myFavoriteNumber);
console.log(typeof myFavoriteCars);
console.log(typeof myFavoriteBoolean);

/* 8.5 Now compare the types of your different variables with one another.
8.6 Make sure to also show a message when the variables you are 
comparing are not the same type.*/

if (myFavoriteFruit==myFavoriteNumber) {
    console.log('SAME TYPE');
}
else{
    console.log('not the same type')
};

if (myFavoriteFruit===myFavoriteNumber) {
    console.log('SAME TYPE');
}
else{
    console.log('not the same type')
};

if (myFavoriteCars==myFavoriteBoolean) {
    console.log('SAME TYPE');
}
else{
    console.log('not the same type')
};

if (myFavoriteCars==myFavoriteNumber) {
    console.log('SAME TYPE');
}
else{
    console.log('not the same type')
};

