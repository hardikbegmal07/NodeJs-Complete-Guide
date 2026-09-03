const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  // const products = Product.fetchAll();
  Product.fetchAll((products) => {
    // user asking Product model, give me all products
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    }); // give me the products, I'll send them back to shop page
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    // user asking Product model, give me all products
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    }); // give me the products, I'll send them back to shop page
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
