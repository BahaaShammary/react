// entry point for our app
import express from "express";
import bodyParser from 'body-parser';

// we create our app object - then we can define different endpoints to our app
const app = express();

app.use(bodyParser.json());
// get request
app.get('/hello', (req, res) => res.send("hello!")); // req is the request, res is the response

// post request
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));

// start our server on the port and display a message when it starts running
app.listen(8000, () => console.log("Listening on port 8000"))

