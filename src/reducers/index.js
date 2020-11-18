import React from "react";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      const stateCopy = { ...state };
      delete stateCopy[action.item.id];
      {
        return stateCopy;
      }
    }

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);

export const getTotal = (state) => {
  let count = 0;
  Object.values(state).forEach((item) => {
    if (item.quantity <= 0) {
      return alert("Please Enter a valid quantity");
    } else {
      count += item?.price * item?.quantity;
    }
  });

  return count / 100;
};
