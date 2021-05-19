export const newBurger = () => {
  return { type: "NEW" };
};

export const beef = () => {
  return { type: "BEEF" };
};

export const chicken = () => {
  return { type: "CHICKEN" };
};

export const cheese = () => {
  return { type: "CHEESE" };
};

export const letuce = () => {
  return { type: "LETUCE" };
};

export const onion = () => {
  return { type: "ONION" };
};
export const tomato = () => {
  return { type: "TOMATO" };
};
export const undo = () => {
  return { type: "UNDO" };
};

export const pickle = () => {
  return { type: "PICKLE" };
};

export const addburger = (arr) => {
  return { type: "ADDBURGER", payload: arr };
};
export const removeburger = () => {
  return { type: "REMOVEBURGER" };
};

export const showModal = () => {
  return { type: "SHOWMODAL" };
};

export const reset = () => {
  return { type: "RESET" };
};

export const addOrder = (order) => {
  return { type: "ADDORDER", payload: order };
};

export const logIn = () => {
  return { type: "LOGIN" };
};

export const logOut = () => {
  return { type: "LOGOUT" };
};

export const addSelection = (order) => {
  return { type: "ADDSELECTEDORDER", payload: order };
};
