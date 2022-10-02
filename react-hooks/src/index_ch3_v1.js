import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Chapter 3 - V1 & V2: Working with useEffect
const App = () => {
    const [name, setName] = useState("Bahaa");
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
            document.title = `Celebrate ${name}`
    },[name]);

    useEffect(() => {
        console.log(`The user is: ${admin ? "admin" : "not admin"}`);}, [admin]);

    return (
        <section>
            <p>Congratulations! {name}</p>
            <button onClick={() => setName("Katrina")}>Change Winner</button>
            <p>{admin ? "Logged in" : "Not logged in"}</p>
            <button onClick={() => setAdmin(true)}>Log in</button>
        </section>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
