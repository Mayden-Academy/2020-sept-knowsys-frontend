const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const mongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;
const buildSchema = require('graphql');

app.use(cors({origin: '*', optionsSuccessStatus: 200}));
app.options('*', cors({origin: '*', optionsSuccessStatus: 200}));
app.use(express.static('public'));

app.get('/', (req, rep) => {
    rep.send('<h1> YAY </h1>');
})

app.listen(3000);
console.log('server running!');