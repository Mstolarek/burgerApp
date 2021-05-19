const modalReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOWMODAL":
      return !state;
    default:
      return state;
  }
};

export default modalReducer;
