// entry point for our app
import express from "express";
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

// we create our app object - then we can define different endpoints to our app
const app = express();

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');
        // perform the operation
        await operations(db);
        client.close();
    }
    catch (error) {
        res.status(500).json({ message: "Error connecting to db", error });
    }
}

app.use(bodyParser.json());
// Practice some dummy requests
// get request
// app.get('/hello', (req, res) => res.send("hello!")); // req is the request, res is the response
// post request
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));
// post request with parameters
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));
// API to get article info
app.get('/api/articles/:articleName', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.articleName;
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
    }, res);
});
// upvote article
app.post('/api/articles/:articleName/upvote', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.articleName;
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articleInfo.upvotes + 1
            }
        });
        const updateArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updateArticleInfo);
    }, res);
});
// An api to get the upvotes for an article
app.get('/api/articles/:articleName/getArticleUpvotes', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.articleName;
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
    }, res)
});

app.post('/api/articles/:articleName/comment', async (req, res) => {
    const {username, text} = req.body;
    const articleName = req.params.articleName;
    withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text }),
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    }, res);
});
// start our server on the port and display a message when it starts running
app.listen(8000, () => console.log("Listening on port 8000"))

