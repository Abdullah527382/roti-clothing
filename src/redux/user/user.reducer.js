const INITIAL_STATE = {
  currentUser: null,
};

// Below we use INITIAL_STATE as default parameter value
const userReducer = (state = INITIAL_STATE, action) => {
  // Use a switch statement to match action types
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        // Set current user value with the payload
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
