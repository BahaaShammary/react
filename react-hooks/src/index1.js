import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const people = ['Alaa', 'Bahaa', 'Fouad', 'Osama', 'Sumaya']
// we can access array by index
// console.log(people[1]);
// We can use destructuring to give items in the array a variable name
// const [first] = ['Alaa', 'Bahaa', 'Fouad', 'Osama', 'Sumaya']
// console.log(first); // this will print Alaa
const [, , third] = ['Alaa', 'Bahaa', 'Fouad', 'Osama', 'Sumaya']
console.log(third); // this will print Fouad
// Destructuring can work with objects and array 

ReactDOM.render(
  <React.StrictMode>
    <App name={third}/>
  </React.StrictMode>,
  document.getElementById('root')
);
