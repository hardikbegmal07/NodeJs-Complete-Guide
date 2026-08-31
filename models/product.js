const fs = require("fs");
const path = require("path");

// const product = [];
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json",
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      // return [];
      return cb([]);
    }
    // return JSON.parse(fileContent);
    cb(JSON.parse(fileContent));
  });
  // return products;
};

module.exports = class Products {
  constructor(title) {
    this.title = title;
  }

  save() {
    // products.push(this);
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
