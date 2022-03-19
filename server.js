require("dotenv").config({path: "./config.env"});
const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const path = require('path');
const bodyParser = require("body-parser");
const articles = require("./controllers/articlesController");
const practices = require("./controllers/practices");
//test

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
connectDB();

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
}); 

app.get('/articles', articles.getAll);

app.get('/articles/:sepractice', articles.getPractices);

app.post('/articles', articles.createOne);


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    });
} else {
    app.get('/', (req,res) => {
        res.send("Api running");
    });
}

module.exports = app;



