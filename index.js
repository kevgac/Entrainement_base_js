console.log("Hello World");
const numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// foreach (es5)
/*
nuumbers.forEach(function (num){
    console.log(num);
});
*/


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

const legumes = ["oignons", "haricots", "asperges", "oignons", "carottes", "courgettes", "poivrons", "tomates", "salades", "pommes de terre", "choux", "navets", "radis", "concombres", "aubergines", "poireaux", "épinards", "champignons", "brocolis", "artichauts", "céleris", "betteraves", "fenouils", "panais", "topinambours"];
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

//find -> renvoi la valeur du premier élément qui match avec la condition fournie
const found = legumes.find(legume => legume === "haricots");
console.log(found);




