//   DEVER DE CASA - AULA 2
// 1) Crie no arquivo index.ts da nossa aplicação uma função que retorne no typescrip baseado em um enum com as seguintes condições: se for do tipo 1, é "Admin", se for do tipo 2 é "usuário"
// 2) Crie no arquivo do index.ts 3 arrays com tipos diferentes, sendo um de tipo de um objeto personalizável, exemplo: People, Animal e etc.

enum UserType {
    Admin = 1,
    User = 2,
  }
  
  function getUserType(userType: UserType): string {
    if (userType === UserType.Admin) {
        return "Admin";
    } else if (userType === UserType.User) {
        return "Usuário";
    } else {
        return "Tipo desconhecido";
    }
  }
  
  console.log(getUserType(UserType.Admin));
  console.log(getUserType(UserType.User)); 
  
  type People = {
    id: number;
    name: string;
    age: number;
  };
  
  type Animal = {
    species: string;
    name: string;
  };
  
  type Product = {
    id: number;
    productName: string;
    price: number;
  };
  
  const peopleArray: People[] = [
    { id: 1, name: "Pedro", age: 23 },
    { id: 2, name: "Gerson", age: 35 },
  ];
  
  const animalsArray: Animal[] = [
    { species: "Cachorro", name: "Trovão"},
    { species: "Tigre", name: "Rex"},
  ];
  
  const productsArray: Product[] = [
    { id: 1, productName: "Tablet", price: 1500 },
    { id: 2, productName: "Smartphone", price: 800 },
  ];
  
  console.log("People Array:", peopleArray);
  console.log("Animals Array:", animalsArray);
  console.log("Products Array:", productsArray);