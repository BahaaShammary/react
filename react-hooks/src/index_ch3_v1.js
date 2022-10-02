import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Chapter 3 - V1: Working with useEffect
const App = () => {
    return (
        <section>
            <p>Congratulations!</p>
        </section>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
