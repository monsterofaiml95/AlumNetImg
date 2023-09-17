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


//connecting to the database
mongoose.connect("mongodb://127.0.0.1:27017/aluminiDB", { useNewUrlParser: true });

//making a schema
const aluminiSchema = new mongoose.Schema({
    _id: Number,
    Aadhaar: Number,
    Name: String,
    Branch: String,
    PassingYear: Number
});


//making mongoose model
const userDetails = new mongoose.model("aluminiDetail", aluminiSchema);

// const user = new userDetails({           //some test users added for testing purpose
//     _id: 1002,
//     Aadhaar: 5002,
//     Name: "testUser2",
//     Branch: "testBranch2",
//     PassingYear: 2026
// });


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