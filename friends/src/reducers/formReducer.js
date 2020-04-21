const initialValue = {
  loading: false,
  data: [],
  error: "",
};

export const formReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        loading: true,
      };
    case "SAVING_DATA":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "ERRORS":
      return {
        ...state,
      };
    default:
      return state;
  }
};
