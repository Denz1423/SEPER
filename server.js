require("dotenv").config({path: "./config.env"});
const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
connectDB();

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    })
} else {
    app.get('/', (req,res) => {
        res.send("Api running");
    });
}



