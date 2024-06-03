const getProducts = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE id = ?";
const deleteProduct = "DELETE FROM products WHERE id = ?";

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
};
