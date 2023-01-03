const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      state += 1;
      return state;
    case "DECREMENT":
      state -= 1;
      return state;
    case "RESET":
      state.count = 0;
      return state;
    default:
      return state;
  }
};

export default counterReducer;
