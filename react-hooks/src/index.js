import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Chapter 3 - V1: Working with useEffect
const App = () => {
    const [name, setName] = useState("Bahaa");
    useEffect(() => {
            document.title = `Celebrate ${name}`
    },);
    return (
        <section>
            <p>Congratulations! {name}</p>
            <button onClick={() => setName("Katrina")}>Change Winner</button>
        </section>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
