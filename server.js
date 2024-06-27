const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom route to handle nested filtering
server.get("/products", (req, res) => {
  const category = req.query.category;
  const discountType = req.query["discount.type"];

  let products = router.db.get("products").value();

  if (category) {
    products = products.filter((product) => product.category === category);
  }

  if (discountType) {
    products = products.filter(
      (product) => product.discount && product.discount.type === discountType
    );
  }

  res.json(products);
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
