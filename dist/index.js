"use strict";
//   DEVER DE CASA - AULA 2
// 1) Crie no arquivo index.ts da nossa aplicação uma função que retorne no typescrip baseado em um enum com as seguintes condições: se for do tipo 1, é "Admin", se for do tipo 2 é "usuário"
// 2) Crie no arquivo do index.ts 3 arrays com tipos diferentes, sendo um de tipo de um objeto personalizável, exemplo: People, Animal e etc.
var UserType;
(function (UserType) {
    UserType[UserType["Admin"] = 1] = "Admin";
    UserType[UserType["User"] = 2] = "User";
})(UserType || (UserType = {}));
function getUserType(userType) {
    if (userType === UserType.Admin) {
        return "Admin";
    }
    else if (userType === UserType.User) {
        return "Usuário";
    }
    else {
        return "Tipo desconhecido";
    }
}
console.log(getUserType(UserType.Admin));
console.log(getUserType(UserType.User));
const peopleArray = [
    { id: 1, name: "Pedro", age: 23 },
    { id: 2, name: "Gerson", age: 35 },
];
const animalsArray = [
    { species: "Cachorro", name: "Trovão", isWild: false },
    { species: "Tigre", name: "Rex", isWild: true },
];
const productsArray = [
    { id: 101, productName: "Tablet", price: 1500 },
    { id: 102, productName: "Smartphone", price: 800 },
];
console.log("People Array:", peopleArray);
console.log("Animals Array:", animalsArray);
console.log("Products Array:", productsArray);
