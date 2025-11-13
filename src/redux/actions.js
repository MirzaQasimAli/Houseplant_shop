// Redux action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action creators
export const addToCart = (plant) => ({
  type: ADD_TO_CART,
  payload: { plant },
});

export const incrementItem = (plantId) => ({
  type: INCREMENT_ITEM,
  payload: { plantId },
});

export const decrementItem = (plantId) => ({
  type: DECREMENT_ITEM,
  payload: { plantId },
});

export const removeFromCart = (plantId) => ({
  type: REMOVE_FROM_CART,
  payload: { plantId },
});
