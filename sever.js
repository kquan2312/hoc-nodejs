const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const adminData = require("./router/admin");
const shopRoutes = require("./router/shop");
const aboutRoutes = require("./router/about");

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(aboutRoutes.router);
app.use("/admin", adminData.router);
//yêu cầu nào tới đường dẫn bắt đầu bằng /admin được xử lý bởi các route được định nghĩa trong adminData.router.
app.use(shopRoutes);
app.use((req, res, next) => {
  // res.sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { docTitle: "Page Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
