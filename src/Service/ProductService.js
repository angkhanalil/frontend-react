import axios from "../axios";

//Get Product Image by ClothingCatId
const getProductImageByClothingCatId = (clothingCatId) => {
  return axios.get(`/product/${clothingCatId}/images`);
};

const ProductService = {
  getProductImageByClothingCatId,
};

export default ProductService;
