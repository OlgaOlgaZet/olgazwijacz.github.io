let names = ['Jacek', 'Marcin', 'Ania', 3];

console.log(names[0]);
console.log(names[2]);
console.log(names[3]);



names.push('Kolejny element');
console.log(names);

names.pop();
console.log(names);

names.unshift('element');
console.log(names);

names.shift('element');
console.log(names);

console.log(typeof names.length);

names.reverse();
console.log(names);

names.sort();
console.log(names);

let numbersArray = [1,8,22,44,67,10,13];
sortedArray = numbersArray.sort((a, b) => a - b);
console.log(sortedArray);
