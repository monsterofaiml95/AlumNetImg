//importing all the necessary modules
import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser"
import session from "express-session";


const port = 3000;
const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));  //including bodyparser
app.use(express.static("public"));   //including static files
app.use(
    session({
        secret: 'your_secret_key', // Change this to a strong, unique secret key
        resave: false,
        saveUninitialized: false,
    })
);

//handling get request of homepage
app.get("/", (req, res) => {
    res.render("index.ejs");
});

//handling get request of getStartedPage
app.get("/getStarted", (req, res) => {
    res.render("getStartedPage.ejs");
});

//handling get Request of Login Page
app.get("/login", (req, res) => {
    res.render("nLoginPage.ejs");
});

//handling get request for register Page
app.get("/register", (req, res) => {
    res.render("nRegisterPage.ejs");
});

//listening on conventional port
app.listen(port, () => {
    console.log(`Server Started On Port ${port}`);
});