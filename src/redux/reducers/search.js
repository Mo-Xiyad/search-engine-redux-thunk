import { initialState } from "../index";
import { FETCH_DATA_FROM_API } from "../actions";

const searchResultsReducer = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case FETCH_DATA_FROM_API:
      return {};
    default:
      return state;
  }
};

export default searchResultsReducer;
