// entry point for our app
import express from "express";
import bodyParser from 'body-parser';

const articleInfo = {
    'learn-react' : {
        'upvotes': 0,
        'comments': []
    },
    'learn-node': {
        'upvotes': 0,
        'comments': []
    },
    'my-thoughts-on-resumes': {
        'upvotes': 0,
        'comments': []
    }
}
// we create our app object - then we can define different endpoints to our app
const app = express();

app.use(bodyParser.json());
// Practice some dummy requests
// get request
// app.get('/hello', (req, res) => res.send("hello!")); // req is the request, res is the response
// post request
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));
// post request with parameters
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));

// upvote article
app.post('/api/articles/:articleName/upvote', (req, res) => {
    const articleName = req.params.articleName;
    if (upvoteArticle(articleName)) {
        res.status(200).send(`The article ${articleName} has been upvoted`);
    }
    else {
        res.status(500).send(`Something went wrong with upvoting article ${articleName}!`);
    }
});
// An api to get the upvotes for an article
app.get('/api/articles/:articleName/getArticleUpvotes', (req, res) => {
    const articleName = req.params.articleName;
    const article = articleInfo[articleName];
    res.status(200).send(`${articleName} has ${article.upvotes} votes!`);
});

app.post('/api/articles/:articleName/comment', (req, res) => {
    const articleName = req.params.articleName;
    const { username, text } = req.body; 
    articleInfo[articleName].comments.push({ username, text });
    res.status(200).send(articleInfo[articleName]);
});
// start our server on the port and display a message when it starts running
app.listen(8000, () => console.log("Listening on port 8000"))

const upvoteArticle = (articleName) => {
    articleInfo[articleName].upvotes += 1;
    return true;
}