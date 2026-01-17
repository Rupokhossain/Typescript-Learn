// built in data type: number, string, boolean, null, undefined


let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;


userId = 101;
firstName = "Siam";
lastName = " Ahmed";
fullName = firstName.concat(lastName);
isActivated = true;


console.log(`Your id: ${userId}, username: ${fullName}, account activated: ${isActivated} `);



// void

function sayHi(): void{
    console.log("Hi there!");
}

sayHi()