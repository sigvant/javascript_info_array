// Is array copied?
// importance: 3
// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?

// ############################################################################# Attempt

// The result is 4. Because arrays are objects, shoppingCart and fruits are references 
// to the same array

//############################################################################## 

// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

// ############################################################################# Attempt

let arr = ['Jazz', 'Blues'];
arr.push('Rock-n-Roll');
arr[Math.floor((arr.length - 1) / 2)] = 'Classics';
console.log( arr.shift() );
arr.unshift('Rap', 'Reggar');

// ## or

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

// ############################################################################## 

// What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // it will return the array

// The call arr[2]() is syntactically the good old obj[method](), in the role of obj
// we have arr, and in the role of method we have 2. So we have a call of the function arr[2]
// as an object method. Naturally, it receives 'this' referencing the object arr and outputs
// the array itself.

// ############################################################################## 

// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, 
// an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

function sumInput() {

	let numbers = [];

	while (true) { // here we find a trick: instead of building conditions, we force the break later
		let value = prompt("A number please?", 0);

		// should we cancel?
		if (value === '' || value === null || !isFinite(value)) break;

		numbers.push(+value);
	}

	let sum = 0;
	for (let number of numbers) {
		sum += number;
	}

	return sum;
}

alert( sumInput() );

// ############################################################################## 

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:

let getMaxSubSum = (arr) => {
	let maxSum = 0; // if we take no elements, zero will be returned

	for (let i = 0; i < arr.length; i++){
		let sumFixedStart = 0;
		for (let j = i; j < arr.length; j++){
			sumFixedStart += arr[j];
			maxSum = Math.max(maxSum, sumFixedStart);
		}
	}

	return maxSum;
}

// this solution has a nested loop that calculates the sum of all subarrays starting
// from that specific position.

// starting from -1:

-1
-1 + 2
-1 + 2 + 3
-1 + 2 + 3 + (-9)
-1 + 2 + 3 + (-9) + 11

// starting from 2:

2
2 + 3
2 + 3 + (-9)
2 + 3 + (-9) + 11

.
.
.

// then it returns the highest sum because Math.max(maxSum, sumFixedStart)
// this solution has a time complexity of O(n²). IN other words, if we increase the array size
// 2 times, the algorithm will work 4 times longer.

// for big arrays (1000, 10000 or more items) such algo can lead to a serious aluggishness

// but there is another...

function getMaxSubSum(arr) {
	let maxSum = 0;
	let partialSum = 0;

	for (let item of arr) {
		partialSum += item;
		maxSum = Math.max(maxSum,partialSum); // keeps only the max partial sum
		if (partialSum < 0) partialSum = 0; // keeps 0 if it is higher than all partialSums
	}

	return maxSum;
}

// # nice and cool

// ############################################################################## 

// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
	let splitStr = str.split('-');
	console.log(splitStr)

	let mappedArray = splitStr.map(item => item.charAt(0).toUpperCase() + item.substr(1));
	console.log(mappedArray)

	let camelizedArray = mappedArray.join('');
	console.log(camelizedArray)

	let finalArray = camelizedArray.charAt(0).toLowerCase() + camelizedArray.substr(1);
	console.log(finalArray)

	return finalArray
}

// charAt(index) captures the character at the specific index of a string
// toUpperCase() transforms the char into a UpperCase char
// substr(index) creates a substring starting at the index

// ## alternative solution

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

// ############################################################################## 

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements 
// with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

// ## Attempt at solution

function filterRange(arr, a, b) {
	// adder brackets around the expression for better readability
	return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

// ############################################################################## 

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr 
// and removes from it all values except those that are between a and b. 
// The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

function filterRangeInPlace(arr, a, b) {

	for (let i = 0; i < arr.length; i++) {
		let val = arr[i];

		//remove if outside of the interval
		if (val < a || val > b) {
			arr.splice(i, 1);
			i--;
		}
	}
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // remove the numbers except from 1 to 5

alert(arr); // [8]

// ############################################################################## 

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10

// ## attempt at solution

function compareNumbers(a, b) {
	return b - a;
}

let arr = [1, 4, 3, 2, 5]
arr = arr.sort(compareNumbers)

alert(arr);

// ## alternative attempt - the function can be passed fully inside the sort

let arr = [1, 10, 5, 2, 9, 0, -1];
arr.sort((a, b) => b - a);
alert( arr );

// ############################################################################## 

// Copy and sort array
// importance: 5
// We have an array of strings arr. We’d like to have a sorted copy of it, 
// but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arr = [1, 10, 5, 2, 9, 0, -1];
let newArr = arr.slice().sort((a, b) => b - a);
alert( arr );
alert( newArr );

// ## alternative attempt - as the return of a function

function copySorted(arr) {
	return arr.slice().sort((a, b) => b - a);
}

let arr = [1,2,5,10,-1,-5,2,0];
let sorted = copySorted(arr);

alert(sorted);
alert(arr);

// ############################################################################## 

// Create an extendable calculator
// importance: 5
// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like 
// "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and 
// returns the result. Should understand plus + and minus -.

// Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

// Then add the method addMethod(name, func) that teaches the calculator 
// a new operation. It takes the operator name and the two-argument 
// function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.

// please note how methods are stored. They are simply added to this.methods property.
// all tests and numeric conversions are done in the calculate method. In future it
// may be extended to support more complex expressions.

function Calculator() {
	this.methods = {
		"-": (a, b) => a = b,
		"+": (a, b) => a + b,
	};

	this.calculate = function(str) { // receives the string from input, let's say '1 + 2'

		let split = str.split(' '), // splits the string in spaces, and assings values to vars
		  a = +split[0],
		  op = split[1],
		  b = +split[2];

	 	if (!this.methods[op] || isNaN(a) || isNaN(b)) {
	 		return NaN;
	 	}

	 	return this.methods[op](a, b); // here it is sketchy, we are getting method[op] with params (a, b)
	};

	this.addMethod = function(name, func) { // here we create a method that allows us to add
		// another methods to the calculator object.
		this.methods[name] = func;
	};
}

// ############################################################################## 

// Map to names
// importance: 5
// You have an array of user objects, each one has user.name. 
// Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = /* ... your code */

alert( names ); // John, Pete, Mary

// ### Attempt at solution

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary

// here we are using map to transform each item into the item.name, because item is an object

// ############################################################################## 

// Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName,
// where fullName is generated from name and surname.

// For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

// ## Attempt at solution

let usersMapped = users.map(item => ({ //here we are mapping the array of objects into a new
	// object creating each property and value.
	fullName: `${user.name} ${user.surname}`,
	id: user.id
}));

// please note that in the arrow functions we need to use additional brackets. We can't
// write like this:

let usersMapped = users.map(user => {
	fullName: `${user.name} ${user.surname}`,
	id: user.id
});

// as we remember, there are two arrow functions: without body value => expr and with body
// value => {...}.

// Here JavaScript would treat { as the start function body, not the start of the object. 
// the workaround is to wrap them in the 'normal' brackets. so it knows it is an object.

// ############################################################################## 

// Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the 
// age property and sorts them by age.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

// ## Attempt at Solution

function sortByAge = (arr) => {
	arr.sort((a, b) => a.age - b.age); // here we access the properties .age from the objects
	// and compare them for sorting. doesn't require additional mapping
}

// ##############################################################################

// Shuffle an array
// importance: 3
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

// All element orders should have an equal probability. For instance, [1,2,3] 
// can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	} 

	return arr
}

//with this following piece of code we can test for randomness if arr = [1, 2, 3]

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

// Also, performance-wise the Fisher-Yates algorithm is much better, there’s no “sorting” overhead.

// ##############################################################################

// Get average age
// importance: 4
// Write the function getAverageAge(users) that gets an array of 
// objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// ## attempt at solution

function getAverageAge(arr) {
	let averagedArray = arr.reduce((prev, user) => prev + user.age, 0) / users.length;
	// a função recebe dois argumentos, previous e user e executa ((prev + user.age)/users.length)
	// a média aritmética, começando com prev = 0 ( primeiro valor);
}

// ##############################################################################

// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

function unique(arr) {
  /* your code */
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

// ## attempt at solution

function unique(arr) {
	let result = [];

	for (let str of arr) {
		if (!result.includes(str)) {
			result.push(str); // preenche o array com str que ainda não estejam no array
		}
	}

	return result;
}

let strings = ["A", "B", "C", "D", "A", "B", "C", "D", "A"];

alert( unique(strings) );

// here we walked the array with items: for each item we'll check if the resulting array already has
// that item. if it is so, then ignore, otherwise add to results.

// the code works, but there's a potential performance problem in it. The method result.includes(str) 
// internally walks the array result and compares each element against str to find the match.

// so if there are 100 elements in result and no one matches str, then it will walk the whole result and
// do exactly 100 comparisons. And if result is large, like 100000, then there would be 10000 comparisons.

// that's not a problem by itself, because JavaScript engines are very fast, so a walk like that
// would be done in microseconds. but we do such test for each element of arr in the for loop

// so if arr.lenght is 10000 we'll have something like 10000 * 10000 comparisons. = 100E6 comparisons.
// so this solution is good for small arrays. we can optimize it with map and set.

// ################################################################################################

// Create keyed object from array
// importance: 4
// Let’s say we received an array of users in the form {id:..., name:..., age... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, 
// and array items as values.

// For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.

// I need to reduce an array of objects into an object, with the keyes (important when handling server
// data st some point).

// ## attempt at solution

funtion groupById(array) {
	return array.reduce((obj, value) => { // we passed into reduce obj and value
		// we get access to the position inside the array of objects using the
		// value.id as index of the position.
		obj[value.id] = value;
		return obj;
	}, {})
}

// ####################################################################################################

