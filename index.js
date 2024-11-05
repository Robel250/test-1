// 1.What is JavaScript, and why is it important in web development?
/*
ANSWER:js is a programming language, it is used to backend and frontend in web develoment












*/

// 2. Where should we include JavaScript in an HTML file, and why?


/*
ANSWER:in the head(<head></head>) and body (<body></body>)b/c












*/

//3.What is a variable in JavaScript, and what are the different types of variables?
/*
ANSWER: variable is a name of a function












*/
// 4. Using JavaScript, write an expression that calculates the area of a rectangle with length 10 and width 5.
/*
ANSWER:

function area(){
    let width=10;
    let height=5;
    return 1/2*width*height
}
console.log(area());










*/
/*
5. Identify basic JavaScript data types: 
let str = "Hello";  -->       string
let num = 42;       -->       numberic
let isAvailable =false    -->boolean
let bool= null;     -->undefine
let def;            -->empty



*/
// 6. Define a function greet that takes a name parameter and returns a greeting message like 'Hello, [name]!'.

/*

ANSWER:
function greet(name="Guest"){
    return`Hello${name}`;

}
console.log(greet());


*/
/*
7. Change these functions to arrow functions

Function sayHello(){
console.log(“hello “)
console.log(“hello world”)
}

Function sayHI(){
console.log(“hi”)
}


*/
// ANSWER:const 
sayHello = () => {
  console.log("hello");
  console.log("hello world");
}

const sayHI = () => {
  console.log("hi");
}


// 8. Create an object named person with properties name set to 'John', age set to 30, and isStudent set to false. How can you access the name property of the person object?

// ANSWER:

/*
ANSWER:
let person={
name:'jhon',
age:'30'
isstudent:'false'
}
console.log(person.name);











*/

// 9. Write a JavaScript conditional statement that checks if a variable score is greater than or equal to 50. If true, log 'Pass' to the console; otherwise, log 'Fail'.

//  ANSWER

function number(){
    if(x>=50){
        console.log("pass");

    }else{console.log("fail")}
}
// 10. Write a for loop that logs the numbers from 1 to 5 to the console.

//  ANSWER
for(i=1;i<=5;i++){
    console.log(i);
}


// 11. Using a for loop, log the numbers from 1 to 10 to the console. Use the break statement to stop the loop when the number reaches 5.

//  ANSWER 

for(x=1;x<=10;x++){
    if(x==6){
        break;
    }console.log(x);
}

//12. Using a for loop, log the numbers from 1 to 5 to the console. Use the continue statement to skip logging the number 3.

// ANSWER
for(x=1;x<=5;x++){
    if(x==3){
        continue;
    }console.log(x);
}
//13. Write a try...catch block that attempts to access a property of an undefined variable. If an error occurs, log 'Cannot access property of undefined' to the console.
// ANSWER
try {
    let obj;
    console.log(obj.property); // Attempting to access property of undefined
} catch (error) {
    console.log("Cannot access property of undefined");
}


// 14.What are default parameters in JavaScript functions? Write a function multiply that takes two parameters, a and b, where b has a default value of 1.
// ANSWER
function greet(a){
    let b=1;
    return a*b
}
console.log(greet(6));

// 15. What is the spread operator in JavaScript, and how is it used? Provide an example that combines two arrays.
// ANSWER spread operater is used to spread out the element for variables name eg
let age=[1,2,3,4,5,6];
console.log(...age);

// 16. What are template literals in JavaScript, and how do they differ from regular strings? Give an example of using a template literal to include a variable.

// ANSWER

/*
Template literals in JavaScript are strings defined with backticks (`) that allow variable and expression interpolation using ${expression}. They support multi-line strings and make embedding values easier and more readable than regular strings, which require concatenation*/ 
let name = "Alice";
let greeting = `Hello, ${name}! `;
console.log(greeting); 


// 17. What is the ternary operator in JavaScript, and how does it work? Provide an example of using the ternary operator to check if a number is even or odd.
// ANSWER :The ternary operator in JavaScript is a shorthand for an if-else statement. It uses the syntax condition ? expressionIfTrue : expressionIfFalse.
let number = 5;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); 


// 18. What is destructuring in JavaScript? Provide a simple example of destructuring an array and object.

// ANSWER
let car1={ make: 'Toyota', model: 'Camry', year: 2020 }
let {make,model,year}=car1;//obgect destructuring
console.log(make);



let numbers=[1,2,3,];
let [num1,num2,num3]=numbers;
console.log(num1);//arrey destructuring



// 19. Using a for...in loop, iterate over the properties of the object car = { make: 'Toyota', model: 'Camry', year: 2020 } and log each property name and its value to the console.
let car ={ make: 'Toyota', model: 'Camry', year: 2020 };
for(key in car){
    console.log(key+":"+car[key]);
}

// ANSWER

// 20. Use the forEach method to log each element of the array fruits = ['apple', 'banana', 'orange'] to the console.

// ANSWER
const fruits = ['apple', 'banana', 'orange'];

fruits.forEach((fruit) => {
  console.log(fruit);
});
