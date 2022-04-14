import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Chapter 2 - V2: Incorporating the useState hook

const App = () => {
    const [status, setStatus] = useState("Not Delivered");
    return (
        <>
            <h1>The package is: {status}</h1>
            <button onClick={() => setStatus("Delivered")} >Delivered</button>
        </>
    )
}
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
