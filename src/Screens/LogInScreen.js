import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { logIn } from "../Redux/actions/actions";

const LogInScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const LogInHandler = () => {
    dispatch(logIn());
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Log in Screen</Text>
      <TouchableOpacity onPress={() => LogInHandler()} style={styles.button}>
        <Text style={styles.text}>Log In</Text>
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

export default LogInScreen;
