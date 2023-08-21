exports.getProducts = (req, res, next) => {
  res.render("shop", {
    pageTitle: "Shop",
    path: "/",
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  res.redirect("/");
};

exports.contact = (req, res, next) => {
  res.render("contact", {
    pageTitle: "Contact Us",
    path: "/contact-us",
  });
};

exports.success = (req, res, next) => {
  res.render("success", {
    pageTitle: "Success",
    path: "/success",
  });
};

exports.pageNotFound = (req, res, next) => {
  res.render("404", {
    path: "",
    pageTitle: "Page Not Found",
  });
};
