const productRepository = require("../models/productRepository");
const ApiError = require("../utils/ApiError");
const { validateSearchQuery } = require("../utils/productValidation");

// Business logic for product operations
const productService = {
  getAllProducts() {
    return productRepository.list();
  },

  getProductById(id) {
    const product = productRepository.findById(id);
    if (!product) {
      throw ApiError.notFound(`No product exists with id "${id}".`);
    }
    return product;
  },

  /**
   * Search products by name with case-insensitive substring matching
   * Validates query using validateSearchQuery before searching
   * Returns empty array if no matches found (not an error)
   */
  searchProducts(rawQuery) {
    const validatedQuery = validateSearchQuery(rawQuery);

    const results = productRepository.searchByName(validatedQuery);
    return {
      query: validatedQuery,
      count: results.length,
      results,
    };
  },
};

module.exports = productService;
