import { DELETE_PRODUCT, GET_PRODUCT, SHOW_CONSOLE } from "./types";

export const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    payload: product,
  };
};

// export const deleteProduct = (newProducts) => {
//   return {
//     type: DELETE_PRODUCT,
//     payload: newProducts,
//   };
// };

export const showConsole = () => ({ type: SHOW_CONSOLE });
