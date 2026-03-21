import express from "express";
import productRoutes from "./products/product.route";
const app = express();
const port = 3000;

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
