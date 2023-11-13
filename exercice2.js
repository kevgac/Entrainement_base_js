/*
Symbol  Value
I       1 
V       5
X       10
L       50
C       100
D       500  
M       1000

I on peut le mettre avant V et X pour faire 4 et 9
X on peut le mettre avant L et C pour faire 40 et 90
C on peut le mettre avant D et M pour faire 400 et 900

Ecrivez-moi une finction qui prend en paramètre une chaine de caractère et qui renvoi un nombre en int (ici on doit donc convertir la string en chiffre romain vers un entier)

input = "III"
output = 3

input = "LVIII"
output = 58

input = "MCMXCIV"
output = 1994
*/




// solution 1
let romanToInt = function(string) {
  const sym = {
    "I": 1,
    "V": 5, 
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M" : 1000
  }

  let result = 0;

  for(let i =0; i<string.length; i++){
    const curr = sym[string[i]];
    const next = sym[string[i+1]];

    if(curr < next){
      result += next - curr;
      i++;
    }
    else{
      result += curr;
    }
  }
  return result;
}

// solution 2
/*
let romanToInt = function(string) {
  const MapRoman = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
  ]);

  let result = 0;
  for(let i = 0; i < string.length; i++){
    if(MapRoman.get(string[i]) < MapRoman.get(string[i+1])){
      result -= MapRoman.get(string[i]);
    }else{
      result += MapRoman.get(string[i]);
    }
  }
  return result;
}
*/
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994