//1.	Create a function that accepts multiple numbers and returns their sum using the rest operator.
import React from 'react';

const sumNumbers = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

const App = () => {
  const result = sumNumbers(1, 2, 3, 4, 5); 
  return <h1>The sum is: {result}</h1>;
};

export default App;




//2.	Write a function that accepts a string and a number. If the number is not provided, the default should be 10. The function should return the string repeated that many times.
import React from 'react';

const repeatString = (str, times = 10) => str.repeat(times);

const App = () => {
  const repeated = repeatString('Hello ', 3);  
  const defaultRepeated = repeatString('Hello ');  

  return (
    <div>
      <h1>Repeated 3 times: {repeated}</h1>
      <h1>Repeated 10 times (default): {defaultRepeated}</h1>
    </div>
  );
};

export default App;





//3.	Write a JavaScript function that uses an arrow function to find the sum of all numbers in an array
const sumArray = (arr) => arr.reduce((acc, num) => acc + num, 0);

const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  const sum = sumArray(numbers); 
  
  return (
    <div>
      <h1>The sum of the array is: {sum}</h1>
    </div>
  );
};

export default App;





//4.	Write a JavaScript function that demonstrates the differences between let, const, and var. Include examples of scoping issues that may occur with var and how let and const behave differently in block scope.
import React from 'react';

const demonstrateScoping = () => {
    
  
  var name = "Simrah";
  if (true) {
    var name = "Harshit";  
    console.log("Inside block with var:", name);  
  }
  console.log("Outside block with var:", name);  

  
  let age = 30;
  if (true) {
    let age = 25;  
    console.log("Inside block with let:", age);  
  }
  console.log("Outside block with let:", age);  d

  
  const country = "India";
  console.log("Constant country:", country);  
  
  
  if (true) {
    const city = "Delhi";
    console.log("Inside block with const:", city); 
  }
  
};

const App = () => {
  
  demonstrateScoping();

  return (
    <div>
      <h1>Check the console for scoping examples!</h1>
    </div>
  );
};

export default App;


