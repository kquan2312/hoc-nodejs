const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  // console.log("shop.js", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html")); //reNDER FILE HTML
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
  });
});

module.exports = router;
