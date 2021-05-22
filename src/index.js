// //1

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// //2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";}
  
 

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// //3

// function checkStorage(available, ordered) {
//   // Change code below this line
  

//   if (ordered === 0) {
//     return "Your order is empty!";}
//   if (ordered > available) {
//    return "Your order is too large, not enough goods in stock!";}
  
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }


// //4 МАССИВЫ

// // Change code below this line
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// //5

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// //6

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

//7

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// 8

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// 9

// function getExtremeElements(array) {
//   // Change code below this line
// array = [array[0] ,array[array.length-1]];
// return array;

//   // Change code above this line
// }

14

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls =  fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);

15

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

16

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    let newArray = firstArray.concat(secondArray);
   if (newArray.length > maxLength) {
        newArray.length = maxLength;
       return newArray;
    }
    return newArray.slice();
}

17

const start = 3;
const end = 7;

for (let i = start ; i <= end; i += 1 ) { // Change this line
  console.log(i);
}

18

function calculateTotal(number) {
 // Change code below this line
let sum = 0;
  for( let i = 1; i<= number; i += 1) {
    sum += i }
  
return sum;

  // Change code above this line
}

19

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

20

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
 for (const item of order) {
  total += item;
}
  // Change code above this line
  return total;
}


21

function findLongestWord(string) {
	const arrayString = string.split(" ");
	let longestWord = arrayString[0];
	for (let i = 0; i < arrayString.length; i+=1) {
		if (longestWord.length < arrayString[i].length) {
			longestWord = arrayString[i];
		}
	}
	return longestWord;
}

22

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
    for(let i = min; i<=max; i+=1){
  numbers.push(i);
  }
numbers.push();
  // Change code above this line
  return numbers;
}

23

function filterArray(numbers, value) {
    const filteredNumbers = [];
    for (const number of numbers) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    }
    return filteredNumbers;
}

24

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return  fruits.includes(fruit); // Change this line
}

25

function getCommonElements(array1, array2) {
  // Change code below this line
  //Объявить Новый пустой массив,
  const uniqieElements = [];
//через фор оф перебрать элементы первого массива,
	for (const element of array1) {
//через иф проверить включаются элементы второго массива в первый(инклуд),
      if (array2.includes(element)) {
//вывести общие элементы в Новый массив(push)
        uniqieElements.push(element);
        }
}
//и ретерн новый массив
	return uniqieElements;


 // Change code above this line
}

26

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const element of order){
  total += element;
  }
  
  // Change code above this line
  return total;
}

27

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (number of numbers){
if (number > value) {
      filteredNumbers.push(number);
    }
  }
return filteredNumbers;
  // Change code above this line
}

28

// Change code below this line
const a = 3 % 3 ; //3-3 = 0
const b = 4 % 3; // 4-3= 1
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

29

function getEvenNumbers(start, end) {
   // Change code below this line
const number = [];
  
for(i = start; i <= end; i += 1) {
  if (i % 2 === 0) 
  number.push(i);
}
return number;
    // Change code above this line

}
  
30

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

31


function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return i;
    }
  }

  return number;
  // Change code above this line
}

32

function includes(array, value) {
  // Change code below this line

  for( let i = 0; i <= array.length; i += 1) {
    if(array[i] === value) {
  return true;
       }
  }
return false;
  // Change code above this line

}

