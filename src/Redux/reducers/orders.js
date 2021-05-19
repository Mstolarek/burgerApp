const orderReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDBURGER":
      return [...state, action.payload];
    case "REMOVEBURGER":
      return state.slice(0, -1); // do przerobki
    case "RESET":
      return (state = []);
    default:
      return state;
  }
};

export default orderReducer;
