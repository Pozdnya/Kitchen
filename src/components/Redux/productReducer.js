import { DELETE_PRODUCT, GET_PRODUCT, SHOW_CONSOLE } from "./types";

const initialState = {
  products: [
    "мясо",
    "сыр",
    "кетчуп",
    "спагетти",
    "тесто",
    "рыба",
    "картошка",
    "морковь",
    "буряк",
  ],
  space: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, space: [...state.space, action.payload] };
    // case DELETE_PRODUCT:
    //   return { ...state, products: [...action.payload] };
    case SHOW_CONSOLE:{
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      return state}
    default:
      return state;
  }
};
//
