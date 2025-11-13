import {
  ADD_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_FROM_CART,
} from './actions';

const initialState = {
  items: {}, // { [id]: { plant, quantity } }
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { plant } = action.payload;
      const existing = state.items[plant.id];
      if (existing) {
        // already in cart, don't add again
        return state;
      }
      return {
        ...state,
        items: {
          ...state.items,
          [plant.id]: { plant, quantity: 1 },
        },
      };
    }
    case INCREMENT_ITEM: {
      const { plantId } = action.payload;
      const existing = state.items[plantId];
      if (!existing) return state;
      return {
        ...state,
        items: {
          ...state.items,
          [plantId]: {
            ...existing,
            quantity: existing.quantity + 1,
          },
        },
      };
    }
    case DECREMENT_ITEM: {
      const { plantId } = action.payload;
      const existing = state.items[plantId];
      if (!existing) return state;
      const newQty = existing.quantity - 1;
      if (newQty <= 0) {
        const newItems = { ...state.items };
        delete newItems[plantId];
        return {
          ...state,
          items: newItems,
        };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [plantId]: {
            ...existing,
            quantity: newQty,
          },
        },
      };
    }
    case REMOVE_FROM_CART: {
      const { plantId } = action.payload;
      if (!state.items[plantId]) return state;
      const newItems = { ...state.items };
      delete newItems[plantId];
      return {
        ...state,
        items: newItems,
      };
    }
    default:
      return state;
  }
}
