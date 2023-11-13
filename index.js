const numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// foreach (es6)
numbers.forEach(num => console.log(num));

console.log("***********************");

//map -> renvoi un nouveau tableau avec les résultats de la fonction fournie
const squareNumbers = numbers.map(num => num * num);
console.log(numbers);
console.log(squareNumbers);

console.log("***********************");

//filter -> renvoi un nouveau tableau avec les éléments qui match avec la condition fournie
const evens = numbers.filter(num => num % 2 === 0);
console.log(numbers);
console.log(evens);

console.log("***********************");

const legumes = ["oignons", "haricots", "asperges", "oignons",];
const filtreDemo = (arr, req) => {
  return arr.filter((el) => el.toLowerCase().indexOf(req.toLowerCase()) !== -1);
}
console.log(filtreDemo(legumes, "non"));

console.log("***********************");

//reduce -> fonction qui est un accumulateur et qui va traiter chaque valeur d'un tableau pour n'en renvoyer qu'une seule
const initailValue = 10;
const sum = numbers.reduce((acc, curr) => acc + curr, initailValue);
console.log(numbers);
console.log(sum);

console.log("***********************");

//indexOf -> renvoi le premier indice de l'élément qui match avec la condition fournie
console.log(legumes.indexOf("haricots"));

let index = [];
let elem = "oignons";
let indx = legumes.indexOf(elem);

while(indx != -1){
    index.push(indx);
    indx = legumes.indexOf(elem, indx + 1);
}
console.log(index);

console.log("***********************");

// push ajoutent un élément
// pop supprime le dernier élément

console.log(legumes);
console.log(legumes.pop());
console.log(legumes);

legumes.push("salade");
console.log(legumes);

console.log("***********************");

// shift supprime le premier élément d'un tableau

console.log(numbers);
console.log(numbers.shift());
console.log(numbers);

// unshift ajoute un élément au début d'un tableau

console.log(numbers);
console.log(numbers.unshift(6, 7, 8));
console.log(numbers);

console.log("***********************");

//slice -> renvoi une portion d'un tableau en fonction d'un indice de début et de fin sans modifier le tableau d'origine
console.log(legumes);
console.log(legumes.slice(1, 3));
console.log(legumes.slice(2));
console.log(legumes);


console.log("***********************");

//some -> renvoi true si au moins un élément du tableau match avec la condition fournie

const even = el => el %2 ===0;
console.log(numbers.some(even));
console.log(numbers);

console.log("***********************");
//splice -> modifier le contenue d'un tableau en retirant les éléments et / ou en ajoutant de nouveaux éléments

console.log(legumes);
// ajouter un élément
legumes.splice(1, 0, "Olives");
console.log(legumes);

// supprimer un élément
legumes.splice(3, 1, "Poivrons");
console.log(legumes);


console.log("***********************");
//concat -> fusionne deux ou plusieurs tableaux

const fruits = ["pommes", "bananes"];
const combined = fruits.concat(legumes);
console.log(combined);


console.log("***********************");
//join -> renvoi une nouvelle chaine de caractère en concaténant tous les éléments d'un tableau

console.log(fruits);
const singleString = fruits.join();
console.log(singleString);

console.log("***********************");

//find -> renvoi la valeur du premier élément qui match avec la condition fournie
//findIndex -> renvoi l'indice du premier élément qui match avec la condition fournie
const found = legumes.find(legume => legume === "haricots");
const foundIndex = legumes.findIndex(legume => legume === "haricots");
console.log(found);
console.log(foundIndex);

console.log("***********************");

//Every -> tester tout les éléments d'un tableau qui passe la condition fournie

const evenNums = [2, 4, 6, 8, 10];

const isAllEven = evenNums.every(num => num % 2 === 0);
console.log(isAllEven);