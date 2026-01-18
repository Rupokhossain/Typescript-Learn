
// numeric enum
enum RequestType {
    readData = 1,
    saveData = 3,
    deleteData,
}

console.log(RequestType);


enum StatusCode {
    Success = 200,
    NotFound = 404,
    Error = 500
}

console.log(StatusCode.Success);


enum Role {
    Admin = 1,
    User,
    Moderator
}

let myRole: Role = Role.Admin;

if(myRole === Role.Admin) {
    console.log("Admin access granted");
}


// string enum 
enum RequestType2 {
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
}

console.log(RequestType2.deleteData);
console.log(RequestType2["readData"]);