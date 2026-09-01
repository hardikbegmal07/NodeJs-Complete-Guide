const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

/*
  Controller = decides what should happen for a request
  Model = handles the application data
*/

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
// (Express / body-parser) parses the form data and makes it available through (req.body)
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
