const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const adminData = require("./router/admin.js");
const shopRoutes = require("./router/shop.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.router);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
