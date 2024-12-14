                        //    ES6 Task
                        // Global Scope

// 1.
// var myVariable = 10; 


// 2.
// let thisVarible = 20; 


// 3.
// const showVariable = 30; 


// 4.
// console.log(showVariable);
// console.log(thisVarible);
// console.log(myVariable);


// 5.
// Are they accessible globally?
// yes they globally accessible


                        //  Function Scope

// 1.
// function variable(){
//     var myVariable = "hello world"  
// }
// variable();


// 2.
// function firtsVariable(){
//     let oneVariable = "hello world"  
// }
// firtsVariable();


// 3.
// function secondVariable(){
//     const twoVariable = "hello world"
// }
// secondVariable();


// 4.
// console.log(myVariable);  THIS WILL RESULT IN AN ERROR
// console.log(oneVariable); THIS WILL RESULT IN AN ERROR
// console.log(twoVariable); THIS WILL RESULT IN AN ERROR


// 5.
// Q... What do you observe?
// I observe that all three variables (`var`, `let`, and `const`) throw a *ReferenceError* when accessed outside the function because they are all scoped to the function or block they were declared in.


                           
                        //  Block Scope
// 1.
// if (true) {
//     var myVar = "I am inside the block";
//   }
  

// 2.
// if (true) {
//     let funVariable = "I am inside the block";
//   }

// 3.
// if (true) {
//     const toVariable = "I am inside the block";
//   }

// 4.
// console.log(myVar); this will accessible
// console.log(funVariable);this will not accessible
// console.log(toVariable);this will not  accessible


// 5. What do you observe?
// var ka variable block ke baahar accessible hota hai, lekin let aur const ke variables sirf block ke andar accessible hote hain, isliye unko block ke baahar access karte waqt error milega.



                        //   Hoisting with Var

// 1.
// console.log(myVar);  
// var myVar = "Hello, World!";


// 2.
// Q .. What value do you get?
//ANSWER:  undefined

                       
                        // Hoisting with let and const:

// 1.
// console.log(myLet);    
// let myLet = "Hello";


// 2.
// console.log(myConst);  
// const myConst = "World";


// 3. Q ... What kind of error do you get?
// Uncaught ReferenceError: Cannot access 'myLet' before initialization
// Uncaught ReferenceError: Cannot access 'myConst' before initialization


                        // Re-declaration:

// 1.
// var myVar = "First declaration";
// var myVar = "Second declaration"; 

// console.log(myVar); 


//   2.
// let myLet = "First declaration";
// let myLet = "Second declaration";  

// console.log(myLet);


// 3.
// const myConst = "First declaration";
// const myConst = "Second declaration";  

// console.log(myConst);

// 4.
// var Case
// The second declaration will overwrite the first one.
  
// let Case
// let does not allow redeclaring the same variable in the same scope.
// it will give syntax Error

// const Case
// const behaves similarly to let,it will give a SyntaxError if you attempt to redeclare the same variable with const.



            //  Re-assignment:

// 1.
// var myVar = "First value";

// myVar = "New value";  
// console.log(myVar);  


// 2.
// let myVar = "First value";

// myVar = "New value";  
// console.log(myVar);  


// 3.
// const myConst = "First value";  

// myConst = "New value";  
// console.log(myConst); 


// 4.
// let Case
// let allows you to declare a variable and then reassign it a new value later.


// const Case
// const: Once a value is assigned to a const variable, const cannot reassign a new value, and trying to do so results in a TypeError.


                      
                        //    Temporal Dead Zone (TDZ):
// // 1.
// console.log(myLet);   
// let myLet = "Hello";


// 2.
// console.log(myConst);  
// const myConst = "World";


// 3.
// ReferenceError: Cannot access 'myLet' before initialization
// ReferenceError: Cannot access 'myConst' before initialization
// why?
// It will give a **ReferenceError** because `let` and `const` are hoisted but not initialized, and accessing them before initialization leads to the **Temporal Dead Zone**.



                    //    When to use var, let, and const:

// 1.
// use of VAR
// function VarUsage() {
//     if (true) {
//         var message = "Hello from the block";
//     }
//     console.log(message);
// }

// 2.
// use of LET
// function myLet() {

// for (let i = 0; i < 5; i++) {
//     console.log(i); 
// }

// }
// myLet()

// 3.
// use of CONST
// function product() {

//     const price = 100;  
//     console.log(price);  

// }

// product();


                        // String Interpolation:
// 1.
// let firstName = "John";
// let lastName = "Diddy";

// let fullName = `${firstName} ${lastName}`;

// console.log(fullName); 



                       // Multi-line Strings:
//1.
// let address = `123 Main Street
// New York, 
// NY 10001USA
// `;

// console.log(address);


                       // Simple Expressions:
// 1.
// let number1 = 25;
// let number2 = 10;

// let result = `The sum of ${number1} and ${number2} is ${number1 + number2}.`;

// console.log(result);


                          // Function Calls
// 1.
// function multiply(num1,num2) {
//     return num1 * num2
// }

// let result = `The product of 5 and 10 is ${multiply(5,10)}.`

// console.log(result);


                         
                            //    Creating a Tagged Template

// Q1
//  function logTemplate(strings, ...values) {
// console.log("Template String:", strings);
//     console.log("Values:", values);
//  }

// // Q2
//  let name = "dony";
//  let age = 26;

// logTemplate`My name is ${name} and I am ${age} years old.`;

                       // Formatting:

// Q1
// function toUpperCaseTag(strings, ...values) {
//     let result = strings[0];
//     values.forEach((value, index) => {
//         result += value + strings[index + 1];
//     });

//     return result.toUpperCase();
// }

// Q2
// let name = "jenna";
// let greeting = "Hello";

// let message = toUpperCaseTag`The greeting is "${greeting}", and the name is "${name}".`;

// console.log(message);


                        // Conditional Logic:-

// Q1
// let currentHour = new Date().getHours();

// // Q2
// let message = currentHour < 12 ? `Good morning! It's ${currentHour} AM.`: `Good afternoon! It's ${currentHour} PM.`;

// console.log(message); 

                        // Loops within Template Literals:-

// Q1
// let shoppingList = ['Milk', 'Eggs', 'Bread', 'Butter', 'Cheese'];

//  Q2
// let htmlList = `<ul>
//   <li>${shoppingList[0]}</li>
//   <li>${shoppingList[1]}</li>
//   <li>${shoppingList[2]}</li>
//   <li>${shoppingList[3]}</li>
//   <li>${shoppingList[4]}</li>
// </ul>`;

// console.log(htmlList);


                    // Escaping Backticks:

// 1.
// let message = `This is a string with a backtick character: \``;

// 2.
// console.log(message);


                    //   Nested Template Literals:
// let table = `<table>
//   <tr>
//     <th>Name</th>
//     <th>Age</th>
//   </tr>
//   <tr>
//     <td>John</td>
//     <td>38/td>
//   </tr>
//   <tr>
//     <td>Jane</td>
//     <td>25</td>
//   </tr>
//   <tr>
//     <td>Mark</td>
//     <td>35</td>
//   </tr>
// </table>`;



// 2.
// console.log(table);


                               //   Simple Condition:
                        
// 1.
//  let age = 20;


//  2.
//  let canVote = age >= 18 ? "Yes" : "No"


//  3.
//  console.log(canVote);



                                //  Even or Odd:

// 1.
// let number = 19;

// 2.
// let evenOrOdd = (number % 2 === 0 ) ? "Even" : "Odd"

// 3.
// console.log(evenOrOdd);

                                // Grade Evaluation:

// // 1.
// let score = 85;


// // 2.
// let grade =   (score >=  90) ? "A grade" 
//             : (score >=  80) ? "B grade" 
//             : (score >=  70) ? "C grade" 
//             : (score >=  60) ? "D grade" 
//             : (score >=  50) ? "E grade" : "Fail"

// // 3.
// console.log(grade);
            

//                                 //  Login Status:
// 1.
// let isLoggedIn = "true"

// // 2.
// let statusMessage =  isLoggedIn ?(isLoggedIn && "Welcome back!") : (isLoggedIn || "Please log in");

// // 3.
// console.log(statusMessage); 


                                // Discount Eligibility:
// // 1.
// let isMember = true;  
// let purchaseAmount = 150; 

// // 2.
// let discount = (isMember && purchaseAmount > 100) ? (purchaseAmount * 0.10) : 0;

// // 3.
// console.log(discount);  


                                  // Determine Max Value:

//   1.
// function maxValue(a, b) {
//     return a > b ? a : b;
//   }
  
//   let result = maxValue(10, 20); 

//   console.log(result);  
  


                                    // Greeting Message:
// // 1.
// function greet(name) {
//     return name ? `Hello ${name}` : `Hello guest` 
// }

// 2.
// console.log(greet());

// 3.
// console.log(greet("jenna"));
                                      
                                    // Mapping Values:
// 1.
// let array = [10, 20, 30 , 40 , 50];

// Q2
// let modifiedNumbers = array.map(num => num % 2 === 0 ? num * 2 : num * 3);

// Q3
// console.log(modifiedNumber



                                    // Filtering Values:-

//1
// let strings = ["apple", "cat", "banana", "dog",];

//2
// let filteredStrings = strings.filter(str => str.length > 3 ? true : false);

//3
// console.log(filteredStrings);


                                     // Copying an Array:
// 1.
1
// let originalArray = [1, 2, 3, 4, 5];

// Q2
// let copiedArray = [...originalArray];

// Q3
// console.log("Original Array:", originalArray);
// console.log("Copied Array:", copiedArray);

// console.log(originalArray === copiedArray);


                                       // Merging Arrays
// 1.
// let array1 = [1, 2, 3];  
// let array2 = [4, 5, 6]; 

// let mergedArray = [...array1, ...array2];

// console.log(mergedArray);  

                                       //Adding Elements to an Array:
// let numbers = [2, 3, 4];  

// let updatedArray = [1, ...numbers, 5];  

// console.log(updatedArray);  
 



                                        // Copying an Object:
// let object1 = { name :"ashar" , age : 18 , city : "lahore"} ;  
// let object2 = { city : "lahore" , country : "Pakistan", age : "20"};  
                                        
// let mergedObject = { ...object1, ...object2 };
                                        
// console.log(mergedObject);  
                                        
                                    
                                        // Updating Object Properties:-

 // Q1
 // let user = { 
 //     name: "ashar", 
//     age: 19, 
 //     email: "ashar958@gmail.com" 
//   };
                                          
// Q2
// let updatedUser = {
//     ...user, 
//     email: "ashar958@gmail.com", 
//     address: "L-321 SECTOR 9, NORTH KARACHI" 
// };
                                          
 //3
 // console.log(updatedUser);
                                          
                                        // Passing Array Elements as Arguments:-
                                        
// //  1
//  function sum(a, b, c){
//      return a + b + c;
//  }
                                        
// //  2
//  let number = [30, 20 ,70];
                                        
// //  3
//  let result = sum(...number);
                                        
// // 4
// console.log(result)    



                                        //  Combining Multiple Arrays:

//1
// function combineArrays(...array) {
                                        
//     return [].concat(...array);
                                        
// }
                                        
//2
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];
                                        
//3
// let combinedArray = combineArrays(array1, array2, array3);
// console.log(combinedArray);
                                        
                                        // Rest Parameter with Spread Operator:-
                                        
//1
// function multiply(num, ...arrys) {
                                        
//     return arrys.map(arrys => arrys * num);
                                        
//   }
                                          
//2
// let result = multiply(2, 1, 3, 5, 7);
  
//3
// console.log(result);
  
                                         // Spread Operator with Nested Structures:-

//1
// let nestedArray = [[1, 2], [3, 4], [5, 6]];
// let copiedArray = [...nestedArray];

//2
// copiedArray[0][0] = 10;
// copiedArray[1][1] = 20;

//3
// console.log('Original Array:', nestedArray);
// console.log('Copied Array:', copiedArray);

                                          // Sum Function:-

//1
// function sum(...args) {

//     return args.reduce((acc, currentValue) => acc + currentValue, 0);

//   }
  
//2
//   console.log(sum(1, 2, 3));       
//   console.log(sum(5, 10, 15, 20));  
//   console.log(sum(7, 3));          
//   console.log(sum(100));            
//   console.log(sum());                                        


                                              //Average Function:
// 1.
// function average(...numbers) {

//     const sum = numbers.reduce((acc, num) => acc + num, 0);


// // 2.
//     return sum / numbers.length
// } 


// // 3.
// console.log(average(1, 2, 3, 4, 5));  
// console.log(average(10, 20, 30));     
// console.log(average(7, 8));


                                            //    First and Rest:
// 1.
// let numbersArr = [10,20,55,69,80,30]

// // 2.
// let = [first , ...rest] = numbersArr

// // 3.
// console.log(`First Element ${first}`);
// console.log(`Remaining elements: ${rest}`); 




                                        //  Skip and Rest:
// 1.
// let colorsArr = ["red,","yellow","blue","orange","purple","black"]

// // 2
// let = [, ,...remainingValues] = colorsArr

// // 3.
// console.log(remainingValues);



                                // Basic Destructuring:
// let person = {
//     name: 'imran',
//     age: 30,
//     email: 'imran235@example.com',
//     address: '123 Main Street'
//   };
  
//   let { name, email, ...rest } = person;
  
//   console.log(name);   
//   console.log(email);   
//   console.log(rest);    
   
                            // Nested Destructuring:
// let student = {
//     id: 123,
//     name: 'Ali',
//     grades: [90, 85, 92],
//     info: {
//       age: 20,
//       major: 'Computer Science'
//     }
//   };
  
//   let { id, name, info: { major }, ...rest } = student;
  
//   console.log(id);       
//   console.log(name);     
//   console.log(major);    
//   console.log(rest);     
                            
                                         
                                  //  Filter Even Numbers:
// 1.
// function filterEven(...numbers) {
//      return numbers.filter(num => num % 2 === 0);
// }

// 2.
//   console.log(filterEven(1, 2, 3, 4, 5));           
//   console.log(filterEven(10, 15, 20, 25, 30));      
//   console.log(filterEven(7, 11, 14, 18, 22, 27));  
//   console.log(filterEven(1, 3, 5, 7));              
//   console.log(filterEven());


                                        // Combine and Sort Arrays
// 1.                                     
// function combineAndSort(...arrays) {
   
//     return [].concat(...arrays).sort((a, b) => a - b);

//   }
  
//2
//   console.log(combineAndSort([3, 1, 4], [5, 2], [7, 6])); 
//   console.log(combineAndSort([10, 2, 30], [4, 15], [20, 25]));  
//   console.log(combineAndSort([9, 8], [7, 6], [5, 4], [3, 2, 1]));  
//   console.log(combineAndSort([3], [2], [1]));  
                                        
                                        //    Basic Destructuring: 
// 1.
//  const fruits = ["apple", "banana", "cherry"];

// // 2.
// const  [firstFruit,secondFruit,thirdFruit] = fruits

// // 3.
// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);


                                          // Skipping Elements:
// 1.
// const colors = ["red", "green", "blue","yellow"]

// // 2.
// const [primaryColor,tertiaryColor] = colors

// // 3.
// console.log(primaryColor);
// console.log(tertiaryColor);


// Rest Operator:-

// 1
// const numbers = [1, 2, 3, 4, 5];

// 2
// const [firstNumber, ...remainingNumbers] = numbers;

// 3
// console.log(firstNumber);
// console.log(remainingNumbers);

                                           // Basic Destructuring:-

// 1
// const person = { name: "kamran", age: 30, city: "islambad" };

// 2
// const { name, age, city } = person;

// 3
// console.log(name);
// console.log(age);
// console.log(city);

                                           // Renaming Variables:-

// 1
// const car = { make: "Toyota", model: "Corolla", year: 2020 };

// 2
// const { make: carMake, model: carModel, year: carYear } = car;

// 3
// console.log(carMake);
// console.log(carModel);
// console.log(carYear);

                                         // Default Values:-

// 1
// const settings = { theme: "dark", language: "portuguese" };

// // 2
// const { theme, language = "English" } = settings;

// // 3
// console.log(theme);
// console.log(language);

                                        // Array of Arrays:-

// 1
// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// 2
// const [[a], [b], [c]] = nestedArray;

// 3
// console.log(a);
// console.log(b);
// console.log(c);

                                      // Object within an Object:-

// 1
// const profile = {
//     username: "kmaran_ali",
//     details: {
//       email: "kamran@example.com",
//       address: "123 lahore"
//     }
//   };
  
// 2
//   const { username, details: { email, address } } = profile;

// 3
//   console.log(username);
//   console.log(email);
//   console.log(address);

                                // Mix of Arrays and Objects:-

// Q1
// const data = {
//     id: 1,
//      info: [
//        { name: "Alice" },
//       { age: 25 }
//     ]
//    };
  
// 2
//    const { id, info: [{ name }, { age }] } = data;

// 3
//    console.log(id);
//    console.log(name);
//    console.log(age);
  
                                    // Array Parameters:-

// 1
// function printCoordinates([x, y]) {
//     console.log(x);
//     console.log(y);
//   }

// 2
// printCoordinates([10, 20]);
// printCoordinates([30, 40]);
  
                                    // Object Parameters:-

// 1
// function displayUser({ name, age }) {
//     console.log(name);
//     console.log(age);
// }

// 2  
// displayUser({ name: "Ali", age: 30 });
// displayUser({ name: "ahmed", age: 25 });
  
                                      // List Property Names:-

// 1
// const book = { title: "1984", author: "George Orwell", year: 1949 };

// 2
// const keys = Object.keys(book);

// 3
// console.log(keys);

                                        // Count Properties:-

// 1
// const student = { name: "ali", age: 16, grade: "10th", school: "ABC High" };

// 2
// const keys = Object.keys(student);

// 3
// console.log(keys.length);


                                        // Iterate Over Keys:
// 1.

// const product = { name: "Laptop", price: 1200, category: "Electronics" };

// const keys = Object.keys(product);

// keys.forEach(key => {
//   console.log(`${key}: ${product[key]}`);
// });


                                        // List Property Values:-

//1
// const movie = { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Sci-Fi" };

//2
// const values = Object.values(movie);

//3
// console.log(values);

                                       // Sum Values:-

// 1
// const scores = { math: 85, science: 90, english: 88 };
// const values = Object.values(scores);

// 2
// const total = values.reduce((sum, value) => sum + value, 0);

// 3
// console.log(total);

                                      // Iterate Over Values:-

// 1
// const user = { username: "john_doe", email: "john@example.com", location: "New York" };
// const values = Object.values(user);

// 2
// values.forEach(value => {
//   console.log(value);
// });

                                     // List Entries:-

// 1
// const car = { make: "Toyota", model: "Corolla", year: 2020 };

// 2
// const entries = Object.entries(car);

// 3
// console.log(entries);

                                    // Convert Object to Array:-

// 1
// const person = { firstName: "John", lastName: "Doe", age: 30 };

// 2
// const entries = Object.entries(person);

// 3
// console.log(entries);

                                   // Iterate Over Entries:-

// 1
// const settings = { theme: "dark", notifications: true, privacy: "high" };
// const entries = Object.entries(settings);

// 2
// entries.forEach(([key, value]) => {
//   console.log(${key}: ${value});
// });

                                  // Filter Keys:-

// 1
// const inventory = { apples: 15, bananas: 5, oranges: 20, grapes: 8 };

// 2
// const keys = Object.keys(inventory).filter(key => inventory[key] > 10);

// 3
// console.log(keys);

                                 // Transform Values:-

// 1
// const temperatures = { morning: 15, afternoon: 25, evening: 10 };

// 2
// const fahrenheitTemperatures = Object.entries(temperatures)
//   .map(([time, temp]) => [time, temp * 9 / 5 + 32]);

// 3
// const newTemperatures = Object.fromEntries(fahrenheitTemperatures);

// 4
// console.log(newTemperatures);

                                 // Key-Value Swap:-

// 1
// const roles = { admin: "Alice", editor: "Bob", viewer: "Charlie" };

// 2
// const swappedRoles = Object.entries(roles)
//   .map(([key, value]) => [value, key]);

// 3
// const newRoles = Object.fromEntries(swappedRoles);

// 4
// console.log(newRoles);

                                  // Filter and Map:
// 1.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2.
// function filterAndMap(arr, filterFunc, mapFunc) {
//   return arr.filter(filterFunc).map(mapFunc);
// }

// 3.
// const result = filterAndMap(
//   numbers,num => num % 2 !== 0,num => num * num               
// );

// 4.
// console.log(result);  



                                  // Sort and Reduce:
// 1.
// const words = ["apple", "banana", "cherry","date"];
 
// // 2.
// function sortAndReduce(arr,sortFunc,reduceFunc){
//  return arr.sort(sortFunc).reduce(reduceFunc)
// }
// // 3.
// const result = sortAndReduce( words,(a, b) => a.localeCompare(b),(acc, current) => acc + current )

// // 4.
// console.log(result);


                            //  Simple Callback:
// 1.
// function printGreeting(message) {
//     console.log(message);  
//   }

// // 2.
//   function greet(name, callback) {
//     const message = `Hello, ${name}!`;     
//     callback(message);  
//   }
  
// //   3
//   greet("Ali", printGreeting); 
   

                      //   Asynchronous Callback

// function displayData(data) {
//     console.log(data);  
//   }
  
//   function fetchData(callback) {
//     setTimeout(() => {
//       const data = { id: 1, name: "ali", age: 30 }; 
//       callback(data);  
//     }, 2000);  
//   }
  
//   fetchData(displayData);  
  

                            //Simple Arrow Function:
// const addArrow = (a, b) => a + b;  
// console.log(addArrow(3, 5));                            



                                              // Arrow Function with Array Methods:
// const numbers = [1,2,3,4,5]

// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers);


                                              // Variable Scope:
// function outer() {
//     const x = 10;  
  
//     function inner() {
//       console.log(x); 
//     }
  
//     inner(); 
//   }
  
//    outer();  
  

                                              // Closure:
// function createCounter() {
//     let counter = 0;  
//     return function() {
//       counter++;  
//       console.log(counter);  
//     };
//   }
  
//   const counter1 = createCounter();  
//   const counter2 = createCounter();  
  
//   counter1();  
//   counter1();  
//   counter2();  
//   counter2();  
//   counter1(); 
  

                                            // Simple Default Parameters:
// 1.
// function greet(name, greeting = "Hello") {
//     console.log(`${greeting}, ${name}!`); 
//   }
  
  
//   greet("Ali", "Good Morning"); 
  
//   greet("ahmed");  
  

                                            // Default Parameters with Other Arguments:

// function calculateArea(width = 10, height = 5) {
//     return width * height; 
//   }
  
  
//   const area1 = calculateArea(15, 8);  
//   console.log(area1);  
  
//   const area2 = calculateArea();  
//   console.log(area2);  


                                           // Square Numbers:
// 1.
// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers);  


                                          // Convert to Uppercase:
// 1.
// const words = ["apple", "banana", "cherry"];

// const uppercaseWords = words.map(word => word.toUpperCase());

// console.log(uppercaseWords);


                                            // Filter Even Numbers:
// 1.
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumber = number.filter(num => num % 2 === 0)

// console.log(evenNumber);


                                            // Filter Long Words:
// 1.
// const words = ["apple", "banana", "cherry", "date"];

// 2.
// const longWords = words.filter(words => words.length > 5)

// 3.
// console.log(longWords);  


                                            // Log Numbers:
// 1.
// const numbers = [1, 2, 3, 4, 5];

// // 2.
// numbers.forEach(function(number) {

// // 3.
//   console.log(number);

// });

                                               // Log Word Lengths:
// 1.
// const words = ["apple","banana","cherry"];

// // 2.
// words.forEach(function(words) {

// // 3.
// console.log(words);

// })



                                               //Sum of Numbers: 
// 1.
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {

//   return accumulator + currentValue;
// }, 0); 

// console.log(sum);  


                                                // Concatenate Strings:

// const result = words.reduce((accumulator, currentValue) => accumulator + " " + currentValue, "");

// console.log(result);  


                                                // Check for Even Number:
// const numbers = [1, 3, 5, 7, 8];

// const hasEvenNumber = numbers.some(function(number) {
//   return number % 2 === 0;  

// });

// console.log(hasEvenNumber);  


                                                // Check for Long Word:
// 1.
// const words = ["apple", "banana", "cherry", "date"];

// const hasLongWord = words.some(function(word) {
//   return word.length > 5; 
// });

// console.log(hasLongWord);  


// Check All Even Numbers:-

// Q1
// const numbers = [2, 4, 6, 8, 10];

// Q2
// const allEven = numbers.every(num => num % 2 === 0);

// Q3
// console.log(allEven);

// Check All Long Words:-

// Q1
// const words = ["elephant", "giraffe", "hippopotamus"];

// Q2
// const allLongWords = words.every(word => word.length > 5);

// Q3
// console.log(allLongWords);

// Find First Even Number:-

// Q1
// const numbers = [1, 3, 5, 7, 8];

// Q3
// const firstEven = numbers.find(num => num % 2 === 0);

// Q3
// console.log(firstEven);

// Find Long Word:-

// Q1
// const words = ["apple", "banana", "cherry", "date"];

// Q2
// const firstLongWord = words.find(word => word.length > 5);

// Q3
// console.log(firstLongWord);

// Find Index of First Even Number:-

// Q1
// const numbers = [1, 3, 5, 7, 8];

// Q2
// const indexOfFirstEven = numbers.findIndex(num => num % 2 === 0);

// Q3
// console.log(indexOfFirstEven);

// Find Index of Long Word:-

// Q1
// const words = ["apple", "banana", "cherry", "date"];

// Q2
// const indexOfLongWord = words.findIndex(word => word.length > 5);

// Q3
// console.log(indexOfLongWord);

// Simple Promise:-

// Q1
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   Q2
//   delay(2000).then(() => console.log("Hello, world!"));

// Promise Chain:-

// Q1
// function fetchData() {
//     return new Promise(resolve => resolve({ name: "John", age: 30 }));
//   }
 
// Q2
// fetchData().then(data => console.log(data));
  
// Error Handling:-

// Q1
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//       const userData = { name: "Alice" };
//       if (!userData.age) {
//         reject("Age is missing");
//       } else {
//         resolve(userData);
//       }
//     });
//   }
  
// // Q2
//   fetchUserData()
//     .catch(error => console.log(error));

// Simulate Network Request:

// Q1
// function getWeather() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const error = false;
//         if (error) {
//           reject("Network error");
//         } else {
//           resolve({ temperature: 22 });
//         }
//       }, 1000);
//     });
//   }
  
// //   Q2
//   getWeather()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
  
// Simple async Function:-

// Q1
// async function sayHello() {
//     await delay(2000);
//     console.log("Hello, world!");
//   }

// Q2
// sayHello();

// Fetch Data with async/await:-

// Q1
// async function getUserData() {
//     const userData = await fetchUserData();
//     console.log(userData);
//   }
  
// Q2
// getUserData().catch(error => console.log(error));

// Fetch and Process Data:-

// Q1
// function fetchUser() {
//     return new Promise(resolve => resolve({ name: "John", age: 30 }));
//   }
  
//   function fetchPosts() {
//     return new Promise(resolve => resolve([{ postId: 1, content: "Hello world" }]));
//   }
  
// Q2
//   async function getUserAndPosts() {
//     const user = await fetchUser();
//     const posts = await fetchPosts();
//     console.log(user, posts);
//   }
  
// Q3
// getUserAndPosts();

// Error Handling in async/await:-

// Q1
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//       const user = null;
//       if (!user) {
//         reject("User not found");
//       } else {
//         resolve(user);
//       }
//     });
//   }
  
// Q2
// async function getUserInfo() {
//     try {
//       const user = await fetchUser();
//       console.log(user);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
// Q3
// getUserInfo();
  
// Simulate API Calls:-

// Q1
// function apiCall() {
//     return new Promise(resolve => {
//       const delayTime = Math.random() * 1000;
//       setTimeout(() => resolve(Data received after ${delayTime.toFixed(0)}ms), delayTime);
//     });
//   }
 
// Q2
// async function getData() {
//     try {
//       const result1 = await apiCall();
//       console.log(result1);
//       const result2 = await apiCall();
//       console.log(result2);
//       const result3 = await apiCall();
//       console.log(result3);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
// Q3
// getData();