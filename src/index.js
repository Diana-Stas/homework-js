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

// 14

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls =  fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// 15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// 16

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let newArray = firstArray.concat(secondArray);
//    if (newArray.length > maxLength) {
//         newArray.length = maxLength;
//        return newArray;
//     }
//     return newArray.slice();
// }

// 17

// const start = 3;
// const end = 7;

// for (let i = start ; i <= end; i += 1 ) { // Change this line
//   console.log(i);
// }

// 18

// function calculateTotal(number) {
//  // Change code below this line
// let sum = 0;
//   for( let i = 1; i<= number; i += 1) {
//     sum += i }
  
// return sum;

//   // Change code above this line
// }

// 19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//  for (const item of order) {
//   total += item;
// }
//   // Change code above this line
//   return total;
// }


// 21

// function findLongestWord(string) {
// 	const arrayString = string.split(" ");
// 	let longestWord = arrayString[0];
// 	for (let i = 0; i < arrayString.length; i+=1) {
// 		if (longestWord.length < arrayString[i].length) {
// 			longestWord = arrayString[i];
// 		}
// 	}
// 	return longestWord;
// }

// 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for(let i = min; i<=max; i+=1){
//   numbers.push(i);
//   }
// numbers.push();
//   // Change code above this line
//   return numbers;
// }

// 23

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     for (const number of numbers) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }
//     return filteredNumbers;
// }

// 24

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return  fruits.includes(fruit); // Change this line
// }

// 25

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   //Объявить Новый пустой массив,
//   const uniqieElements = [];
// //через фор оф перебрать элементы первого массива,
// 	for (const element of array1) {
// //через иф проверить включаются элементы второго массива в первый(инклуд),
//       if (array2.includes(element)) {
// //вывести общие элементы в Новый массив(push)
//         uniqieElements.push(element);
//         }
// }
// //и ретерн новый массив
// 	return uniqieElements;


//  // Change code above this line
// }

// 26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const element of order){
//   total += element;
//   }
  
//   // Change code above this line
//   return total;
// }

// 27

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (number of numbers){
// if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
// return filteredNumbers;
//   // Change code above this line
// }

// 28

// // Change code below this line
// const a = 3 % 3 ; //3-3 = 0
// const b = 4 % 3; // 4-3= 1
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// 29

// function getEvenNumbers(start, end) {
//    // Change code below this line
// const number = [];
  
// for(i = start; i <= end; i += 1) {
//   if (i % 2 === 0) 
//   number.push(i);
// }
// return number;
//     // Change code above this line

// }
  
// 30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// 31


// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// 32

// function includes(array, value) {
//   // Change code below this line

//   for( let i = 0; i <= array.length; i += 1) {
//     if(array[i] === value) {
//   return true;
//        }
//   }
// return false;
//   // Change code above this line

// }
// //=================================== MODULE-03 ============================================

// 1

// const apartment = {
// imgUrl: "https://via.placeholder.com/640x480" ,
// descr: "Spacious apartment in the city center",
// rating: 4,
// price: 2153,
//   tags: ["premium", "promoted", "top"]
// };

// 2

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
 
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
// };

// 3

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Change code above this line

// 4
  
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

// 5

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// 6

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// 7

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica", city: "Kingston" };

// 8

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
// name,
//   price,
//   image,
//   tags


//   // Change code above this line
// };

// 9

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
  
  
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam"
  
  
//   // Change code above this line
// };

// 10

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// 11

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city centre';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }

//   // Change code above this line
// }

// 12

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const obj in object) {
//   // Change code below this line
// if (object.hasOwnProperty(obj)){
// propCount +=1;
// }}

//   // Change code above this line
//   return propCount;
// }

// 13

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
// values.push(apartment[key]);
// }

// 14

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//       propCount += 1;
//     }
  

//   return propCount;
//   // Change code above this line
// }

// 15

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


// 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const values = Object.values(salaries);
//   for (const value of values) {
//      totalSalary+=value
//    }
//   // Change code above this line
//   return totalSalary;
// }

// 17

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
  
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }

// 18

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//  for (const product of products){
//    let name = product.name;
//  if (productName === name){
//   return product.price;} 
//  } 
//   return null;
// }
 
// 19

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//    const array = [];
//   for (const product of products) {
//    if (product.hasOwnProperty(propName)) {
//       array.push(product[propName]);
//     }
//   }
//   return array;
// // Change code above this line
// }

// 20

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let total = 0;
//   for (const prop of products){
//     let name = prop.name;
//     if (productName === name){
//       total = prop.price * prop.quantity;
//     }
//   }
//   return total;
 
  
// // Пиши код выше этой строки
// }

// 21

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// 22

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;

// // Нужно заменить оъемный код на ДЕСТРУКТУРИЗАЦИЮ

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow,
//        icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//       } = highTemperatures;
  

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// 24

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// 25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const { today: 
//        {high: highToday,
//         low: lowToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//        },
//        tomorrow: {
//          high: highTomorrow,
//          low: lowTomorrow,
//          icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//       },
// } = forecast;
      
// 26

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {today: {low: todayLow, high: todayHigh},
//           tomorrow: {low: tomorrowLow, high: tomorrowHigh}
//    } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// 27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = (Math.max(...scores));
// const worstScore = (Math.min(...scores));

// 28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = (Math.max(...allScores));
// const worstScore = (Math.min(...allScores));

// 29

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// 30

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//    const newData = {completed, category, priority, ... data};
//   return newData;
//   // Change code above this line
// }

// 31

// // Change code below this line
// function add(...args) {
//   let sum = 0;
//   for (arg of args){
//   sum += arg;}
//   return sum;
//   // Change code above this line
// }

// 32

// // Change code below this line
// function addOverNum(values, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg > values)
//     total += arg;
//   }

//   return total;
//   // Change code above this line
// }

// 33

// // Change code below this line
// function findMatches(...args) {
//   const matches = []; // Don't change this line
// for( let i = 1; i < args.length; i += 1){
// if (args[0].includes(args[i])){
// matches.push(args[i]);
// }
// }
//   // Change code above this line
//   return matches;
// }

// 34

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//   return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };

// 35

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
	
	
	
//     // Change code above this line
//   },
// };

// 36

// const atTheOldToad = {
//   // Change code below this line
//   potions:[],
//   // Change code above this line
// };

// 37

// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions(){
//     return this.potions;
//   }
//   // Change code above this line
// };


// 38

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     return this.potions;
//     // Change code above this line
//   },
// };

// 39

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     // Change code above this line
//   },
// };

// 40

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//    const bookIndex = this.potions.indexOf(oldName);
//     this.potions.splice(bookIndex, 1, newName);
//     // Change code above this line
//   },
// };

// 41

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;    }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const {potions} = this;
// for(const potion of potions){
//     if (potion.name === potionName) {
//     const index = potions.indexOf(potion);
//       potions.splice(index, 1);
//       return potions;
//     }
// }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const {potions} = this;
//     for( const potion of potions){
//     if(potion.name === oldName){
//     potion.name = newName;
//     return potions;
//     }
//     }
//      return `Potion ${oldName} is not in inventory!`
//       },
//   // Change code above this line
// };

// //=============================================MODUL-04==============================================

// 1

// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = makePizza();
// const pointer = makePizza;

// 2

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// 3

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//     console.log(`Едим пиццу ${pizzaName}.`);                             });


// 4
    
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//    order(pizzaName, onSuccess, onError) {
//     for(let pizza of this.pizzas){
//       if(pizza === pizzaName){
//       return onSuccess(pizza)}
//     }
//     return onError((`В ассортименте нет пиццы с названием ${pizzaName}.`))
//   }
// };
// // Пиши код выше этой строки
// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }
// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }
// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// 5

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

// 6

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']


// 7

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
// return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;}
// const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//   messages.push(composeMessage.call(orders[i], i+1))
// }

// 8

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }

// 9

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');

// 10

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service)); 
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// //=======================================MODULE-05============================================
// 1

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// 2

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

// 3

// function Car(brand, model, price) {
// this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const auto = new Car();

// 4

// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }


// 5

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// Car.prototype.getPrice = function () {
// return this.price;
// };

// Car.prototype.changePrice = function(newPrice) {
// this.price = newPrice;
// };

// 6

// function Storage (items) {
// this.items = items;
// };
// Storage.prototype.getItems = function () {
// return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
// this.items.push(newItem);
  
// };
// Storage.prototype.removeItem = function (item) {
//  const itemIndex = this.items.indexOf(item);
//          this.items.splice(itemIndex, 1);
  
// };


// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// 7

// function StringBuilder (baseValue) {
// this.value = baseValue;
// };
// StringBuilder.prototype.getValue = function () {
// return this.value;
// };
// StringBuilder.prototype.padEnd = function (str) {
// this.value += str;
// };
// StringBuilder.prototype.padStart = function (str) {
// this.value = str += this.value;
// };
// StringBuilder.prototype.padBoth = function (str) {
// this.value = str += this.value += str;
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// 8

// class Car { }

// 9

// class Car {
//   brand;
//   model; 
//   price;
  
//   constructor({brand, model, price}) {
//   this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// 10

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//   return this.price;
//   }
//   changePrice(newPrice) {
//   this.price = newPrice;
//   }
// }

// 11
// class Car {
//   #brand;
//   constructor({brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand(){
//     return this.#brand;
//   }
//   changeBrand(newBrand){
//     this.#brand = newBrand;
//   }
// }

// 12

// class Storage {
// #items;
  
// constructor (items) {
// this.#items = items;
// }
// getItems() {
//   return this.#items;
// };

// addItem(newItem) {
//   this.#items.push(newItem);
// };
// removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// 13

// class StringBuilder {
//   #value;
//   constructor(value) {
//     this.#value = value;
//   }
  
// getValue() {
//   return this.#value;
// };

// padEnd(str) {
//   this.#value += str;
// };
// padStart(str) {
//   this.#value = str + this.#value;
// };
// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// 14

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }


// 15

// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       return;
//     }
//       this.#price = newPrice;
//     }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// 16

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
// static checkPrice(price) {
//   if (price > Car.#MAX_PRICE) {
//     return 'Внимание! Цена превышает допустимую.';
//   }
//    return 'Всё хорошо, цена в порядке.';
// }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// 17

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
//  class Admin extends User {
//    static AccessLevel  = { BASIC: 'basic', SUPERUSER: 'superuser' };
// }
 
// 18

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   accessLevel;
//   // Пиши код ниже этой строки
// constructor({email, accessLevel}) {
//   super(email, accessLevel);
//   this.accessLevel = accessLevel;
// }
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// 19

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//   static blacklistedEmails;
  

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;
//   blacklistedEmails;

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true
//     }
// return false;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 

// ===============================================MODULE-06=============================================

// 1

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//   orderedItems.forEach(function (orderedItem) {
//     totalPrice += orderedItem;
//   })

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// 2

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
//   numbers.forEach(function(number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     })
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
  
// 3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
//   firstArray.forEach(function(first) {
//       if (secondArray.includes(first)) {
//         commonElements.push(first);
//       }
//     })
  
//     return commonElements;
//     // Пиши код выше этой строки
// }
  
// 4

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => {

//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// 5

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// // Пиши код выше этой строки

// Решение

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => 
//    quantity * pricePerItem;

// // Пиши код выше этой строки


// 6

// // Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
// orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Пиши код выше этой строки

// 7

// // Пиши код ниже этой строки
// const filterArray =  (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) =>{
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
  
// 8

// // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) =>{
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
// }
  
// 9

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   const newArray = [];
  
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       number = number + value;
//     newArray.push(number);
//     } else if (number % 2 !== 0) {
//        newArray.push(number);
//     }
//   });
   
//    return newArray;
//     // Пиши код выше этой строки
// }
  
// 10

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planets);

// 11

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
// const titles = books.map(book => book.title);
// console.log(titles);
  
// 12

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
// const genres = books.flatMap((book) => book.genres);
  
// 13

// // Пиши код ниже этой строки
// const getUserNames = users => {
//      return users.map(user => user.name);
//   };
//   // Пиши код выше этой строки

// 14
  
// // Пиши код ниже этой строки
// const getUserEmails = users => {
//     return users.map(user => user.email);

//   };
//   // Пиши код выше этой строки

// 15
  
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// 16

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index
// );

// 17

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// 18

// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//  return users.filter((user) => user.eyeColor === color);

// };
// // Пиши код выше этой строки

// 19

// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
 return users.filter((user) => user.age > minAge && user.age < maxAge);

};
// Пиши код выше этой строки

20

// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
   return users.filter((user) => user.friends.includes(friendName));
};
// Пиши код выше этой строки


21

// Пиши код ниже этой строки
const getFriends = (users) => {
   return users.flatMap((user) => user.friends).filter((friend, index, array) => array.indexOf(friend) === index)
};
// Пиши код выше этой строки

22

// Пиши код ниже этой строки
const getActiveUsers = (users) => {
   return users.filter((user) => user.isActive === true);
};
// Пиши код выше этой строки


23

// Пиши код ниже этой строки
const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive === false); 
};
// Пиши код выше этой строки


24

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE );
const bookByAuthor = books.find((book) => book.author === AUTHOR);

25

// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
   return users.find((user) => user.email === email)
};
// Пиши код выше этой строки


26

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((elem1) => elem1 % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((elem1) => elem1 % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((elem2) => elem2 % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((elem2) => elem2 % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((elem3) => elem3 % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((elem3) => elem3 % 2 !== 0);

27

// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
   return users.every((user) => user.isActive === true)
};
// Пиши код выше этой строки


28

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some((arr1) => arr1 % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((arr1) => arr1 % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some((arr1) => arr1 % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((arr1) => arr1 % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((arr1) => arr1 % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((arr1) => arr1 % 2 !== 0);

29

// Пиши код ниже этой строки
const isAnyUserActive = users => {
   return users.some((user) => user.isActive === true)
};
// Пиши код выше этой строки

30

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((previousValue, number) =>{
  return previousValue + number;
}, 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

31

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((playtime,number) => {
  return playtime + number.playtime / number.gamesPlayed
}, 0);

32

// Пиши код ниже этой строки
const calculateTotalBalance = users => {
    return users.reduce((sum, user) => sum + user.balance, 0);
};
// Пиши код выше этой строки

33

// Пиши код ниже этой строки
const getTotalFriendCount = users => {
   return users.reduce((acc, array) => acc + array.friends.length, 0);
};
// Пиши код выше этой строки

34

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

35

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

36

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));
  
  const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));
  

37
  
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a, b) => a.rating- b.rating);
const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

38

// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
 return [...users].sort((a,b) => a.balance - b.balance);  
};
// Пиши код выше этой строки

39

// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
   return [...users].sort((a,b) => b.friends.length - a.friends.length);
};
// Пиши код выше этой строки

40

// Пиши код ниже этой строки
const sortByName = users => {
   return [...users].sort((a,b) => a.name.localeCompare(b.name));
};
// Пиши код выше этой строки

41

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books]
.filter((book) => book.rating > MIN_BOOK_RATING)
.map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));

42
  
// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => [...users]
  .sort((a,b) => a.friends.length - b.friends.length)
   .map((user) => user.name)                                          

// Пиши код выше этой строки

43

// Пиши код ниже этой строки
const getSortedFriends = users => 
 [...users].flatMap((user) => user.friends)
.filter((friend, index, array) => array.indexOf(friend) === index)
.sort((a,b) => a.localeCompare(b))


// Пиши код выше этой строки

44

// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return [...users]
  .filter((user) => user.gender === gender)
  .reduce((total, user) =>{
  return total + user.balance; }, 0);};
 

// Пиши код выше этой строки

// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
   return users.filter((user) => user.gender === gender)
  .reduce((elem, user) => {
   return elem + user.balance}, 0) 
};
// Пиши код выше этой строки

=======================================THE END ===========================================================







