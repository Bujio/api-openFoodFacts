const axios = require("axios");
const BASE_URL = "https://world.openfoodfacts.net/api/v2/product";

//GET PRODUCT BY BARCODE
module.exports.getProduct = async (req, res) => {
  const barcode = req.params.barcode;
  const url = `${BASE_URL}/${barcode}`;

  try {
    const response = await axios.get(url);
    const productData = response.data;
    res.status(200).json(productData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching product data");
  }
};
