import React from "react";
import { View, StyleSheet } from "react-native";

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: "teal",
    borderBottomWidth: 2,
    width: "80%",
    alignSelf: "center",
    marginVertical: 15,
  },
});

export default Separator;
