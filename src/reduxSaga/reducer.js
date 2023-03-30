import * as types from "./constant";

const stateInit = { products: [], load: false };
export const getListProductsReducer = (stateProduct = stateInit, action) => {
  switch (action.type) {
    // case types.GET_LIST_PRODUCTS: {
    //   return {
    //     ...stateProduct,
    //     load: true,
    //   };
    // }
    case types.GET_LIST_PRODUCTS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...stateProduct,
        products: data,
        load: false,
      };
    }
    default: {
      return stateProduct;
    }
  }
};

//====== get product theo id

const initialStateP = {
  product: {},
  error: null,
};

export const productReducer = (state = initialStateP, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.product,
        error: null,
      };
    case types.GET_PRODUCT_FAILURE:
      return {
        ...state,
        product: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
//===
const addProductState = {
  name: "",
  describe: "",
  cost: 0,
  image: "",
};
// reducer nhận vào 1 object
export const addProductReducer = (state = addProductState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_SUCCESS:
      console.log("==> action ADD_PRODUCT_SUCCESS", action.product.name);
      return {
        ...state,
        name: action.product.name,
        describe: action.product.describe,
        cost: action.product.cost,
        image: action.product.image,
      };
    case types.ADD_PRODUCT_FAILURE:
      console.log("==> action ADD_PRODUCT_FAILURE", action);
      return {
        ...state,
        name: null,
        describe: null,
        cost: null,
        image: null,
      };
    default:
      return state;
  }
};

// xóa
const initialStateDelete = {
  product: null,
  error: null,
};

export const deleteProductReducer = (state = initialStateDelete, action) => {
  switch (action.type) {
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.product,
        error: null,
      };
    case types.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        product: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
//== SỬA
const initialStateUpdate = {
  id: 0,
  product: {},
};

export const updateProductReducer = (state = initialStateUpdate, action) => {
  switch (action.type) {
    case types.UPDATE_PRODUCT_SUCCESS:
      console.log("==> action UPDATE_PRODUCT_SUCCESS trả về", action);
      return {
        ...state,
        product: action.product,
      };
    case types.UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        product: null,
      };
    default:
      return state;
  }
};