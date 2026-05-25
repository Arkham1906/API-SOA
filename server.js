import express from "express";

import userRoutes from "./services/users.js";
import productRoutes from "./services/products.js";
import orderRoutes from "./services/orders.js";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("SOA Online Store API is running");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});