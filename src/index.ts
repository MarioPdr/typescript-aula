const add = (a: number, b: number): number => {
    return a + b;
}

const num1 = 15;
const num2 = 20;

const result = add(num1, num2);

console.log(`A soma de ${num1} e ${num2} é: ${result}`);


interface Pessoa {
    name: string,
    age: number | null,
    weight: string,
    isStudent: boolean,
}

const pedro: Pessoa = {
    name: 'Pedro',
    age: 23,
    weight: '80kg',
    isStudent: false
}

const luiz: Pessoa = {
    name: 'Pedro',
    age: null,
    weight: '80kg',
    isStudent: true
}


console.log(luiz);