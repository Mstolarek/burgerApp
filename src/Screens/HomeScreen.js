import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import Composition from "../components/composition";
import Menu from "../components/menu";
import Separator from "../components/separator";
import { addburger, removeburger, showModal } from "../Redux/actions/actions";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
import ModalOrder from "../components/modalOrder";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const burger = useSelector((state) => state.burger);
  const order = useSelector((state) => state.order);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <View style={styles.accButton}>
          <Text>Account </Text>
          <GiHamburgerMenu />
        </View>
      </TouchableOpacity>

      <Text style={styles.headerText}>Burger compositor using Redux</Text>
      <Menu />
      {burger[0] ? (
        <View>
          <View style={{ alignSelf: "center", alignItems: "center" }}>
            <Text style={styles.headerText}>This is your Burger</Text>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <GiHamburger style={{ color: "darkred" }} />
              <Text>
                Click on burger to it
                <Text style={{ fontWeight: "bold" }}> add</Text> to your Order{" "}
              </Text>
              <GiHamburger style={{ color: "darkred" }} />
            </View>
            <TouchableOpacity onPress={() => dispatch(addburger(burger))}>
              <Composition value={burger} />
            </TouchableOpacity>
          </View>
          <Separator />
          {order[0] ? (
            <View style={styles.ordersTab}>
              <Text style={styles.headerText}>Your Order</Text>
              <View style={{ flexDirection: "row", margin: 10 }}>
                <GiHamburger style={{ color: "darkred" }} />
                <Text>
                  Click on burger to
                  <Text style={{ fontWeight: "bold" }}> remove</Text> it from
                  your Order
                </Text>
                <GiHamburger style={{ color: "darkred" }} />
              </View>
              <TouchableOpacity
                onPress={() => dispatch(removeburger())}
                style={styles.ordersTile}
              >
                <FlatList
                  data={order}
                  renderItem={({ item }) => <Composition value={item} />}
                  numColumns={5}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => dispatch(showModal())}
                style={styles.button}
              >
                <Text style={styles.text}>Place Your Order</Text>
              </TouchableOpacity>
              <ModalOrder />
            </View>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: { fontSize: 24, color: "white" },
  lowerText: { color: "teal" },
  lowerIcons: { color: "teal" },
  headerText: {
    fontSize: 32,
    marginBottom: 40,
    fontWeight: "bold",
    alignSelf: "center",
  },
  accButton: {
    margin: 15,
    padding: 5,
    position: "absolute",
    alignSelf: "flex-end",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "black",
  },
  button: {
    backgroundColor: "teal",
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    marginVertical: 10,
    padding: 10,
    borderRadius: 6,
  },
  ordersTab: { alignItems: "center" },
  ordersTile: {},
});

export default HomeScreen;
