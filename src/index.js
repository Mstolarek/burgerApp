import "react-native-gesture-handler";
import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import HomeScreen from "./Screens/HomeScreen";
import AccountScreen from "./Screens/AccountScreen";
import LogInScreen from "./Screens/LogInScreen";
import reducers from "./Redux/reducers/reducers";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LogIn"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="LogIn" component={LogInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
