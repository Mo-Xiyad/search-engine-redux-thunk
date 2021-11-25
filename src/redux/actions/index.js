export const ADD_TO_FAVORITES = "ADD_TO_CART";
export const REMOVE_ONE_BY_ONE = "REMOVE_ONE_BY_ONE";
export const REMOVE_SELECTED_FROM_FAVORITES = "REMOVE_SELECTED_FROM_FAVORITES";

export const addToFavorites = (itemToAdd) => ({
  type: ADD_TO_FAVORITES,
  payload: itemToAdd, // this is going to be the item we intend to add to the favorite list
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
});

// this reducer is used inside the "FAVORITES" Component
export const removeFromFavoritesOneByOne = (itemToRemove) => ({
  type: REMOVE_ONE_BY_ONE,
  payload: itemToRemove, // this is going to be the item we intend to remove to the favorite list
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
});

// this reducer is used inside the "HOME" Component
export const removeSelectedFavorites = (itemToRemove) => ({
  type: REMOVE_SELECTED_FROM_FAVORITES,
  payload: itemToRemove, // this is going to be the item we intend to remove to the favorite list
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
});
