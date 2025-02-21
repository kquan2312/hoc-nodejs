const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const e = require("express");

const products = [];
//admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
//add-product => POST
router.post("/admin/add-product", (req, res) => {
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/"); // chuyen huong tu '/product' -> '/'
});
// app.use(bodyParser.urlencoded({ extended: false }));

// module.exports = router;
exports.router = router;
exports.products = products;
