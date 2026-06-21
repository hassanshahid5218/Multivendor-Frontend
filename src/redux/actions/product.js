import axios from "axios";
import { server } from "../../server";

// create product
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({
      type: "productCreateRequest",
    });

    const { data } = await axios.post(
      `${server}/product/create-product`,
      productData
    );

    dispatch({
      type: "productCreateSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "productCreateFail",
      payload: error.response?.data?.message,
    });
  }
};

// get All Products of a shop
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    console.log("ACTION RECEIVED ID:", id);

    dispatch({
      type: "getAllProductsShopRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );

    console.log("API RESPONSE:", data);

    dispatch({
      type: "getAllProductsShopSuccess",
      payload: data.products,
    });
  } catch (error) {
    console.log("PRODUCT ERROR:", error);
    console.log("PRODUCT ERROR RESPONSE:", error.response);

    dispatch({
      type: "getAllProductsShopFailed",
      payload: error.response?.data?.message,
    });
  }
};

// delete product of a shop
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductFailed",
      payload: error.response.data.message,
    });
  }
};

// get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    console.log("GET ALL PRODUCTS ACTION FIRED");

    dispatch({
      type: "getAllProductsRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop`
    );

    console.log("API RESPONSE:", data);

    dispatch({
      type: "getAllProductsSuccess",
      payload: data.products,
    });
  } catch (error) {
    console.log("GET ALL PRODUCTS ERROR:", error);

    dispatch({
      type: "getAllProductsFailed",
      payload: error.response?.data?.message,
    });
  }
};