import React from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addburger, newBurger } from "../Redux/actions/actions";
import { useNavigation } from "@react-navigation/native";
import Composition from "./composition";

const LoopHelper = ({ value }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const array = [];
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value[i].length; j++) {
      array.push(value[i][j]);
    }
  }

  const orderHandler = (item) => {
    dispatch(addburger(item));
    dispatch(newBurger());
    navigation.navigate("Home");
  };

  return (
    
    <FlatList
      data={array}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => orderHandler(item)}>
          <Composition value={item} backgroundcolor={"Teal"} />
        </TouchableOpacity>
      )}
      numColumns={5}
    />
  );
};

export default LoopHelper;
