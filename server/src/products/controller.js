const conn = require("../../db");
const queries = require("./queries");

const getProducts = (req, res) => {
  conn.query(queries.getProducts, (error, result) => {
    if (error) throw error;
    return res.json(result);
  });
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  conn.query(queries.getProductById, [id], (error, result) => {
    if (error) throw error;
    return res.json(result);
  });
};

const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  conn.query(queries.deleteProduct, [id], (error, result) => {
    if (error) throw error;
    res.json("Success");
  });
};

const addProduct = (req, res) => {
  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.image,
    req.body.collection,
    req.body.category,
    req.body.size,
    req.body.material,
    req.body.reviews,
  ];

  conn.query(queries.addProduct, [values], (error, result) => {
    if (error) throw error;
    res.status(201).json("Success");
  });
};

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  addProduct,
};
