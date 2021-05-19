const loginReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return !state;
    case "LOGOUT":
      return (state = false);
    default:
      return state;
  }
};

export default loginReducer;
