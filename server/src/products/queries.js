const getProducts = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE id = ?";
const deleteProduct = "DELETE FROM products WHERE id = ?";
const addProduct =
  "INSERT INTO products (title, description, price, image, collection, category, size, material, reviews) VALUES (?)";
const editProduct =
  "UPDATE products SET title = ?, description = ?, price = ?, image = ?, collection = ?, category = ?, size = ?, material = ? WHERE id = ?";

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  addProduct,
  editProduct,
};
