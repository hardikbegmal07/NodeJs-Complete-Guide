const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router(); // this is like a mini express app tied to the other express app or plugable into other express apps

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.send(
  //   '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>',
  // );
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body); // we are able to parse incoming body because of bodyParser which is great !!
  res.redirect("/");
}); // now this will only filter for the post request not the get request

module.exports = router;
