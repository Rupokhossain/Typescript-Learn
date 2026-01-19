type UserId = string | number;
type Person = {
    name: string;
    age: number;
};

const user: Person = {
    name: "Siam",
    age: 22
}


// type alias define 
type Employee = {
    id: number;
    name: string;
    department: string;
    isPermanent: boolean;
    salary: number;
};

let emp1: Employee = {
    id: 101,
    name: "Siam",
    department: "IT",
    isPermanent: true,
    salary: 45000

};

console.log(`Employee Name: ${emp1.name}`);


// union type alias
type TransactionStatus = "Pending" | "Success" | "Failed";

function updateStatus(status: TransactionStatus) {
    console.log(`Transaction status is now: ${status}`);
}

updateStatus("Success");


// intersection type alias
type PersonalDetails = {
    name: string;
    phone: string;
};

type AddressDetails = {
    city: string;
    zipCode: number;
};

// intersection diye add kora
type FullContact = PersonalDetails & AddressDetails;

const myContact: FullContact = {
    name: "Siam",
    phone: "324242545",
    city: "Dhaka",
    zipCode: 1212
};

console.log(`Full Details is ${myContact.city}`);