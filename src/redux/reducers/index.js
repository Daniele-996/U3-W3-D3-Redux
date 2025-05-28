const initialState = {
  jobs: {
    content: [],
  },
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_COMPANY":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: action.payload,
        },
      };
    case "ADD_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };
    default:
      console.log("DEFAULT");
      return state;
  }
};

export default mainReducer;
