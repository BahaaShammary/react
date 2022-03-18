import React, {useEffect, useState} from 'react';
import './App.css';

function App({login}) {
  // https://api.github.com/users/bahaashammary
  // set the initial state as null
  const [data, setData] = useState(null);
  useEffect(() => { // Use `fetch` to get the data. Next, use a `then` clause to stringify the response. Finally, use another `then` clause to populate an array.
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json()) // capture the response into a json object
    .then(setData); // setData calls the function of the state so our object is stored in the state
  }, []);
  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <h2>{data.location}</h2>
        <img alt={data.id} src={data.avatar_url}/>
      </div>
    )  
  }
  return <p>There is no user data</p>
}

export default App;
