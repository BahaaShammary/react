import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Chapter 2 - V3: Building a checkbox with useState

const App = () => {
    const [checked, setChecked] = useState(false);
    return (
        <>
            <input type="checkbox" value={checked} onClick={(checked) => setChecked(!checked)}/>
            <p>{checked ? "Checked" : "Unchecked"}</p>
        </>
    )
}
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
