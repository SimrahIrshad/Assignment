//1)	Create a simple React component that returns JSX with the following:
//a)	A heading element (<h1>) that says "Welcome to JSX!"
//b)	A paragraph (<p>) with a brief description of what JSX is.
//c)	A button that, when clicked, logs a message in the console.
import React from 'react';

const WelcomeComponent = () => {
  
  const handleClick = () => {
    console.log('Button was clicked!');
  };

  return (
    <div>
      
      <h1>Welcome to JSX!</h1>

     
      <p>
        JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.
        It makes it easier to create and visualize the structure of your React components.
      </p>

     
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default WelcomeComponent;





//2)	Write a React component that accepts two numbers as props and returns the sum inside an HTML <div>. Use JSX expressions inside the return statement.
import React from 'react';


const SumComponent = ({ num1, num2 }) => {
  return (
    <div>
      
      <h2>The sum of {num1} and {num2} is: {num1 + num2}</h2>
    </div>
  );
};

export default SumComponent;





//3)	Write a React component that renders an unordered list (<ul>) of your favorite movies. Use an array and map() to render each movie as a list item (<li>).
import React from 'react';


const MovieList = () => {
  
  const movies = ['Inception', 'The Dark Knight', 'Interstellar', 'The Matrix', 'Forrest Gump'];

  return (
    <div>
      <h2>My Favorite Movies</h2>
      <ul>
        
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;



