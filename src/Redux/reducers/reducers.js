import burgerReducer from "./burger";
import loginReducer from "./signin";
import { combineReducers } from "redux";
import orderReducer from "./orders";
import modalReducer from "./modalreducer";
import savedOrdersReducer from "./savedOrders";

const reducers = combineReducers({
  burger: burgerReducer,
  login: loginReducer,
  order: orderReducer,
  modal: modalReducer,
  savedOrders: savedOrdersReducer,
});

export default reducers;
