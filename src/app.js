const express = require("express");
const path = require("path");
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname,"../views");
const partials_path = path.join(__dirname,"../partials");


app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path)); //to use static website

app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render('404',{
    errorMsg : 'Oops! Page Not Found'
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
