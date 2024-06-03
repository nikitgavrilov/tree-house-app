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

module.exports = {
  getProducts,
  getProductById,
};
