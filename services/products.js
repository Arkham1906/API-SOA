import express from "express";

const router = express.Router();

const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Mouse", price: 40 }
];

router.get("/", (req, res) => {
    res.json(products);
});

export default router;