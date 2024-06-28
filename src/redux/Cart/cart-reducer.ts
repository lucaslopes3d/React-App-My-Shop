import { Products } from "../../Data/Products";

interface CartState {
  cart: Products[];
}

const inicialState: CartState = {
  cart: [],
};

interface CartAction {
  type: string;
  payload: Products;
}

export function cartReducer(state = inicialState, action: CartAction) {
  switch (action.type) {
    case "cart/add-product":
      return {
        ...state,
        cart: [...state.cart, action.payload], // payload é o produto que se deseja adicionar ao carrinho
      };
    case "cart/remove-product":
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(
        (products) => products.id !== productToRemove.id
      );

      return {
        ...state,
        cart: cartFiltered,
      };
    default:
      return state;
  }
}
