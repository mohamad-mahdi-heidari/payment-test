const express = require("express");
const router = express.Router();
const userRoutes = require("./user.route");
const paymentRoutes = require("./payment.route");
router.use("", userRoutes);
router.use("/payments", paymentRoutes);

module.exports = router;
