let ages = [5, 8, 90, 23, 78, 56];

ages = ages.filter((el) => el > 9);
console.log(ages);

let names = {};
let personName = "metin";

/**
 * Create a signed http request
 * @param {string} name - BUY or SELL
 * @param {string} age - The symbol to buy or sell
 * @param {string} address - The quantity to buy or sell
 * @return {undefined}
 */
function addAge(name, age, address) {
  names[name] = { age, address };
}

addAge("metin", 27, "esenler");
console.log(names[personName].age);
console.log(names.metin.age);
console.log(names);
