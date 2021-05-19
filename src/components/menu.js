import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { GiCow, GiChicken, GiBackwardTime } from "react-icons/gi";
import {
  newBurger,
  beef,
  chicken,
  cheese,
  tomato,
  onion,
  letuce,
  undo,
} from "../Redux/actions/actions";

const Menu = () => {
  const dispatch = useDispatch();
  const burger = useSelector((state) => state.burger);

  return (
    <View style={styles.container}>
      {burger[0] ? null : (
        <TouchableOpacity
          onPress={() => dispatch(newBurger())}
          style={styles.tile}
        >
          <Text style={styles.text}>New Burger</Text>
        </TouchableOpacity>
      )}
      {burger[0] ? (
        <View>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => dispatch(beef())}
              style={styles.tile}
            >
              <Text style={styles.text}>Beef</Text>
              <GiCow style={{ fontSize: 24, color: "white", margin: 6 }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(chicken())}
              style={styles.tile}
            >
              <Text style={styles.text}>Chicken</Text>
              <GiChicken style={{ fontSize: 24, color: "white", margin: 6 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => dispatch(cheese())}
              style={styles.tile}
            >
              <Text style={styles.text}>Cheese </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(onion())}
              style={styles.tile}
            >
              <Text style={styles.text}>Onion </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(tomato())}
              style={styles.tile}
            >
              <Text style={styles.text}>Tomato</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(letuce())}
              style={styles.tile}
            >
              <Text style={styles.text}>Letuce </Text>
            </TouchableOpacity>
            {burger[2] ? (
              <TouchableOpacity
                onPress={() => dispatch(undo())}
                style={styles.tileUndo}
              >
                <Text style={styles.text}>Undo </Text>
                <GiBackwardTime
                  style={{ fontSize: 24, color: "white", margin: 6 }}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row", justifyContent: "space-evenly" },
  tile: {
    flexDirection: "row",
    width: 200,
    height: 100,
    margin: 5,
    backgroundColor: "teal",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  tileUndo: {
    flexDirection: "row",
    width: 200,
    height: 100,
    margin: 5,
    backgroundColor: "darkred",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 24, color: "white" },
});

export default Menu;
