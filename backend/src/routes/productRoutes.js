const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

// Product API routes
// Note: /search must be registered before /:id to avoid matching "search" as an ID
router.get("/search", productController.search);
router.get("/", productController.getAll);
router.get("/:id", productController.getById);

module.exports = router;
