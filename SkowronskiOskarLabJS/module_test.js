
// zad 1

let currency1 = require('./currency1');
const Currency = require('./currency2');

console.log('50 zł odpowiada następującej ilości dolarów amerykańskich:');
console.log(currency1.usdToPL(50));

console.log('50 zł odpowiada następującej ilości euro:');
console.log(currency1.euroToPL(50));

console.log('50 zł odpowiada następującej ilości funtów:');
console.log(currency1.gbpToPL(50));

console.log('50 zł odpowiada następującej ilości franków szwajcarskich:');
console.log(currency1.chfToPL(50))

console.log('50 zł odpowiada następującej ilości jenów japońskich:');
console.log(currency1.jpyToPL(50));


let currency3 = new Currency(50);

console.log('50 zł odpowiada następującej ilości dolarów amerykańskich:');
console.log(currency3.usdToPL(50));

console.log('50 zł odpowiada następującej ilości euro:');
console.log(currency3.euroToPL(50));

console.log('50 zł odpowiada następującej ilości funtów:');
console.log(currency3.gbpToPL(50));

console.log('50 zł odpowiada następującej ilości franków szwajcarskich:');
console.log(currency3.chfToPL(50));

console.log('50 zł odpowiada następującej ilości jenów japońskich:');
console.log(currency3.jpyToPL(50));



// zad 2



const math1 = require('./math1');
const MyMathModule = require('./math2');


console.log("Dodawanie 5 + 3:", math1.add(5, 3));
console.log("Odejmowanie 5 - 3:", math1.subtract(5, 3));
console.log("Mnożenie 5 * 3:", math1.multiply(5, 3));
console.log("Dzielenie 5 / 3:", math1.divide(5, 3));
console.log("Potęgowanie 5^3:", math1.power(5, 3));


const math2 = new MyMathModule();

console.log("Dodawanie 5 + 3:", math2.add(5, 3));
console.log("Odejmowanie 5 - 3:", math2.subtract(5, 3));
console.log("Mnożenie 5 * 3:", math2.multiply(5, 3));
console.log("Dzielenie 5 / 3:", math2.divide(5, 3));
console.log("Potęgowanie 5^3:", math2.power(5, 3));