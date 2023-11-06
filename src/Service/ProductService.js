import axios from "../axios";

//Get Product Image by ClothingCatId
const getProductImageByClothingCatId = (clothingCatId) => {
  return axios.get(`/product/${clothingCatId}/images`);
};
//Get All FactorSizes
const getFactorSizes = () => {
  return axios.get(`/factorSizes`);
};
const ProductService = {
  getProductImageByClothingCatId,
  getFactorSizes,
};

export default ProductService;
