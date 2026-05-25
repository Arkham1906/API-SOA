import express from "express";
const router = express.Router();
const orders = [];

router.get("/", (req, res) => {
    res.json(orders);
});

router.post("/", (req, res) => {
        const order = req.body;

        orders.push(order);

        res.status(201).json({
        message: "Order created",
        order
    });
});

export default router;