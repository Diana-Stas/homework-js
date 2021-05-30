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

22

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;
const icon = highTemperatures.icon;

// Нужно заменить оъемный код на ДЕСТРУКТУРИЗАЦИЮ

const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

23

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow,
       icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
      } = highTemperatures;
  

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


24

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

25

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const { today: 
       {high: highToday,
        low: lowToday,
        icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
       },
       tomorrow: {
         high: highTomorrow,
         low: lowTomorrow,
         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
      },
} = forecast;
      
26

// Change code below this line
function calculateMeanTemperature(forecast) {
  const {today: {low: todayLow, high: todayHigh},
          tomorrow: {low: tomorrowLow, high: tomorrowHigh}
   } = forecast;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

27

const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = (Math.max(...scores));
const worstScore = (Math.min(...scores));

28

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = (Math.max(...allScores));
const worstScore = (Math.min(...allScores));

29

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings };

30

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
   const newData = {completed, category, priority, ... data};
  return newData;
  // Change code above this line
}

31

// Change code below this line
function add(...args) {
  let sum = 0;
  for (arg of args){
  sum += arg;}
  return sum;
  // Change code above this line
}

32

// Change code below this line
function addOverNum(values, ...args) {
  let total = 0;

  for (const arg of args) {
    if(arg > values)
    total += arg;
  }

  return total;
  // Change code above this line
}

33

// Change code below this line
function findMatches(...args) {
  const matches = []; // Don't change this line
for( let i = 1; i < args.length; i += 1){
if (args[0].includes(args[i])){
matches.push(args[i]);
}
}
  // Change code above this line
  return matches;
}

34

const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
  return `Updating book ${oldName} to ${newName}`;
  }
  // Change code above this line
};

35

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
	
	
	
    // Change code above this line
  },
};

36

const atTheOldToad = {
  // Change code below this line
  potions:[],
  // Change code above this line
};

37

const atTheOldToad = {
  // Change code below this line
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions(){
    return this.potions;
  }
  // Change code above this line
};


38

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName);
    return this.potions;
    // Change code above this line
  },
};

39

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    this.potions.splice(this.potions.indexOf(potionName), 1);
    // Change code above this line
  },
};

40

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
   const bookIndex = this.potions.indexOf(oldName);
    this.potions.splice(bookIndex, 1, newName);
    // Change code above this line
  },
};

41

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    const {potions} = this;
for(const potion of potions){
    if (potion.name === potionName) {
    const index = potions.indexOf(potion);
      potions.splice(index, 1);
      return potions;
    }
}
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const {potions} = this;
    for( const potion of potions){
    if(potion.name === oldName){
    potion.name = newName;
    return potions;
    }
    }
     return `Potion ${oldName} is not in inventory!`
      },
  // Change code above this line
};


