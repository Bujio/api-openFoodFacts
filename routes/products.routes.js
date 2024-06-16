const router = require("express").Router();
const productController = require("../controllers/productController");

router.use("/:barcode", productController.getProduct);

module.exports = router;
