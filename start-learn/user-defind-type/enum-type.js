// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
    RequestType[RequestType["deleteData"] = 4] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Error"] = 500] = "Error";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.Success);
var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["User"] = 2] = "User";
    Role[Role["Moderator"] = 3] = "Moderator";
})(Role || (Role = {}));
var myRole = Role.Admin;
if (myRole === Role.Admin) {
    console.log("Admin access granted");
}
// string enum 
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.deleteData);
console.log(RequestType2["readData"]);
