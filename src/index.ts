// function getFirstElement<T>(arr: T[]): T {
//     return arr[0];
//   }
  
//   const numbers = [1, 2, 3];
//   const strings = ['a', 'b', 'c'];
  
//   console.log(getFirstElement(numbers));
//   console.log(getFirstElement(strings)); 
  
//   function identity<T>(value: T): T {
//     return value;
//   }
  
//   console.log(identity<number>(42)); 
//   console.log(identity<string>("Hello")); 
  
//   function merge<T, U>(obj1: T, obj2: U): T & U {
//     return { ...obj1, ...obj2 };
//   }
  
//   const result = merge({ name: 'John' }, { age: 30 });
//   console.log(result);
  
//   class Box<T> {
//     private content: T;
  
//     constructor(content: T) {
//       this.content = content;
//     }
  
//     getContent(): T {
//       return this.content;
//     }
//   }
  
//   const stringBox = new Box<string>("A book");
//   const numberBox = new Box<number>(123);
  
//   console.log(stringBox.getContent()); // "A book"
//   console.log(numberBox.getContent()); // 123

//   interface KeyValue<K, V> {
//     key: K;
//     value: V;
//   }
  
//   const item: KeyValue<number, string> = { key: 1, value: "Apple" };
//   const item2: KeyValue<string, number> = { key: "Apple", value: 2 };
  
//   console.log(item);
//   console.log(item2);
  
//   function getLength<T extends { length: number }>(item: T): number {
//     return item.length;
//   }
  
//   console.log(getLength("Hello")); // 5
//   console.log(getLength([1, 2, 3])); // 3
//   // console.log(getLength(42)); // Erro: number não possui propriedade 'length'
  
//   function mergeWithId<T extends { id: number }, U>(obj1: T, obj2: U): T & U {
//     return { ...obj1, ...obj2 };
//   }
  
//   const merged = mergeWithId({ id: 1, name: "John" }, { age: 30 });
//   console.log(merged); // { id: 1, name: 'John', age: 30 }
  

function mergeObjects<T extends object, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const obj1 = { name: "Alice" };
const obj2 = { age: 25 };

const result = mergeObjects(obj1, obj2);

console.log(result); 


interface logValues<T, V, U>{
    valor1: T,
    valor2: V,
    valor3: U
}

const item: logValues<string, number, boolean> = { valor1: "Alice", valor2: 32, valor3: true};

console.log(item);