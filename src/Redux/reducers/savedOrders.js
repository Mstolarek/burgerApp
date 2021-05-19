const savedOrdersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDORDER":
      return [...state, action.payload];
    case "DELETEORDER":
      return [state];
    default:
      return state;
  }
};

export default savedOrdersReducer;
