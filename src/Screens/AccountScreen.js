import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import LoopHelper from "../components/loopHelper";
import { GiFastBackwardButton, GiHamburger } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { logOut } from "../Redux/actions/actions";

const AccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const savedOrders = useSelector((state) => state.savedOrders);
  const logOutHandler = () => {
    dispatch(logOut());
    navigation.navigate("LogIn");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <GiFastBackwardButton
            size={32}
            style={{ marginBottom: 40, marginRight: 20 }}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>This is Your Account Screen</Text>
      </View>

      {savedOrders[0] ? (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 18 }}>Recent Orders</Text>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <GiHamburger style={{ color: "darkred" }} />
            <Text>
              Click on burger to it
              <Text style={{ fontWeight: "bold" }}> add</Text> to your Order{" "}
            </Text>
            <GiHamburger style={{ color: "darkred" }} />
          </View>
          <LoopHelper value={savedOrders} />
        </View>
      ) : null}

      <TouchableOpacity onPress={() => logOutHandler()} style={styles.button}>
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
  },
  headerText: {
    fontSize: 32,
    marginBottom: 40,
    fontWeight: "bold",
    alignSelf: "center",
  },
  text: { fontSize: 24, color: "white" },
  button: {
    backgroundColor: "teal",
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    marginVertical: 10,
    padding: 10,
    borderRadius: 6,
  },
});

export default AccountScreen;
