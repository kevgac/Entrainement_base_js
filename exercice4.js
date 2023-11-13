console.log("Exo 1 :");
/*
    Ecrire une fonction qui va prendre en paramètre 2 tab et qui va renvoyer un nouveau tableau trié par ordre croissant
*/
const tab1 = [1, 34, 50, 7, 0];
const tab2 = [16, 1, 100, 56];

let tabSort = function (tab1, tab2){
    let tab = tab1.concat(tab2);
    tab.sort((a, b) => a - b);
    return tab;
}
console.log(tab1);
console.log(tab2);
console.log(tabSort(tab1, tab2));


console.log("Exo 2 :");
/*
    Ecrire une fonction qui va prendre en paramètre un nombre et retourne la somme de tous les multiples de 5 jusqu'à n.
*/
let sumMultiple = function (n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        if(i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumMultiple(10));


console.log("Exo 3 :");
/*
    Ecrire une fonction qui va prendre en paramètre un tableau d'entier et qui supprime les doublons (ne pas utiliser d'autre tableau, uniquement celui passé en paramètre)
*/
let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let removeDuplicate = function (tab){
    for(let i = 0; i<tab.length; i++){
        for(let j = i+1; j<tab.length; j++){
            if(tab[i] === tab[j]){
                tab.splice(j, 1);
            }
        }
    }
    return tab;
}
console.log(tab);
console.log(removeDuplicate(tab));



console.log("Exo 4 :");
/*
    Imaginez une liste de membre d'un club de foot. Chaque membre à (id, nom, age, actif).

    - Ecrire une fonction qui prends en param un tableau de membres, un nouveau membre et ajoute ce membre à la fin du tableau.(attention l'id devra etre unique)

    - Ecrire une fonction qui prends en param un tableau de membres et supprime tous les membres inactifs.

    - Ecrire une fonction qui prends en param un tableau de membres et le nom d'un membre. Afin de retourner le membre trouvé si il existe.
*/
let membres = [
    {
        id: 1,
        nom: "Kevin",
        age: 23,
        actif: true
    },
    {
        id: 2,
        nom: "Dorian",
        age: 23,
        actif: false
    },
    {
        id: 3,
        nom: "Malek",
        age: 32,
        actif: true
    }
];

console.log(membres);

console.log("------------------");

let addMembre = function (membres, mewMembre){
    let id = membres.length + 1;
    mewMembre.id = id;
    membres.push(mewMembre);
    
    return membres;
}
console.log(addMembre(membres, {nom: "Milan", age: 23, actif: true}));
console.log(membres);

console.log("------------------");

let removeMembreInactif = function (membres){
    return membres.filter(membre => membre.actif === true);
}
console.log("Voici tous les membres actifs :\n",removeMembreInactif(membres));

console.log("------------------");

let findMembre = function (membres, nom){
    return membres.find(membre => membre.nom === nom);
}
var nom = "Kevin";
console.log("Est-ce que le membre", nom , "existe ?\n",findMembre(membres, nom));