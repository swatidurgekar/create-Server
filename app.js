const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require("./routes/contact");

const productsController = require("./controllers/products");

const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/contact-us", contactRoutes);
app.post("/success", productsController.success);
app.use(shopRoutes);

app.use(productsController.pageNotFound);

app.listen(4000);
