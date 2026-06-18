const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const DATA_PATH = path.join(__dirname, "..", "data", "products.json");
const products = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));

function list() {
  return [...products];
}

// Find product by ID
function findById(id) {
  return products.find((product) => product.id === id) || null;
}

// Search products by name (case-insensitive substring match)
function searchByName(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  return products.filter((product) =>
    product.name.toLowerCase().includes(normalized),
  );
}

module.exports = {
  list,
  findById,
  searchByName,
};
