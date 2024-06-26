const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getProducts);
router.get("/:id", controller.getProductById);
router.delete("/:id", controller.deleteProduct);
router.post("/", controller.addProduct);
router.put("/:id", controller.editProduct);

module.exports = router;
