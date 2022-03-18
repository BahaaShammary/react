import React, {useEffect, useState} from 'react';
import './App.css';

function App({login}) {
  // https://api.github.com/users/bahaashammary
  // set the initial state as null
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => { // useEffect to fetch the data
    if(!login) return <p>No username provided</p>;
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json()) // capture the response into a json object
    .then(setData) // setData calls the function of the state so our object is stored in the state
    .then(() => setLoading(false)) 
    .catch(setError); //The `catch` clause is used to handle failure situations; it can redirect the application to provide a meaningful message back to the user.
  }, [login]);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
    return (
      <div>
        <h1>{data.name}</h1>
        <h2>{data.location}</h2>
        <img alt={data.id} src={data.avatar_url}/>
      </div>
    );  
}

export default App;
