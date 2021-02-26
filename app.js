require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

// view engine set-up
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// static folders
app.use("public", express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("default/contact");
})


// server Listening
app.listen(process.env.PORT, `${process.env.HOSTNAME}`, () => {
    console.log(chalk.magenta(`Server Listening at http://${process.env.HOSTNAME}:${process.env.PORT}`));
});