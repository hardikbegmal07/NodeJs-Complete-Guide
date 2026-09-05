const fs = require("fs");
const path = require("path");

/*
  Product Model
     │
     ├── What is a Product?
     │
     ├── Save Product
     │
     └── Fetch Products
             │
             ↓
       products.json
*/

// const product = [];
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json",
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    // I) go to product file, read the product
    if (err) {
      // return [];
      return cb([]);
    }
    // return JSON.parse(fileContent);
    cb(JSON.parse(fileContent)); // II) convert them from JSON into Javascript data [.parse()], cb (callback): giving them to whoever asked for them
  });
  // return products;
}; // controller asks for a product,
// model reads products.json, waiting for file, finc products and return them with help of CALLBACK function cb

module.exports = class Products {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  } // create a projuct object whose title is "title".

  save() {
    // products.push(this);
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      // I) first we get existing products from the file
      products.push(this); // II) when we get those product, we add this product to that list
      // this: refers to the particular product, add the product, i just created to the existing products.
      fs.writeFile(p, JSON.stringify(products), (err) => {
        // JSON.stringify(products): gets converted into JSON text so that it can be written into the file.
        // console.log(err);
      }); // III) converts the list to JSON and write it back into the file.
    });
  } // saves the product

  static fetchAll(cb) {
    // static ? bcz we don't need to create a particular product to ask: "what products exists?"
    getProductsFromFile(cb);
  } // retrieves product, we are asking Product model itself for all products

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id == id);
      cb(product);
    });
  }
};

// there can be different models as well like Product, User, Order, Cart
// it represents data / business object.
