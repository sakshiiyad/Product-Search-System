const productService = require("../services/productService");

// HTTP request handlers for product endpoints
const productController = {
  // Get all products
  getAll(req, res) {
    const products = productService.getAllProducts();
    res.status(200).json({ count: products.length, results: products });
  },

  // Get single product by ID
  getById(req, res, next) {
    try {
      const product = productService.getProductById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  },

  // Search products by query parameter
  search(req, res, next) {
    try {
      const { q } = req.query;
      const result = productService.searchProducts(q);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = productController;
