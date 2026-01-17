// built in data type: number, string, boolean, null, undefined
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "Siam";
lastName = " Ahmed";
fullName = firstName.concat(lastName);
isActivated = true;
console.log("Your id: ".concat(userId, ", username: ").concat(fullName, ", account activated: ").concat(isActivated, " "));
// void
function sayHi() {
    console.log("Hi there!");
}
sayHi();
