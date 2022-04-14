import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaStar } from 'react-icons/fa'
// Chapter 2 - V4: Working with component trees
const createArray = (length) => [...Array(length)]

const Star = ({selected = false}) => {
    return (
        <FaStar color={selected? "red" : "gray"}/>
    )
}

const StarRating = ({ totalStars = 5 }) => {
    return (
        createArray(totalStars).map((n, i) => (
            <Star key={i} />
        )));
}
const App = () => {
    return (
        <StarRating totalStars={10} />
    )
}
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
