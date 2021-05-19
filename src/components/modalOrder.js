import React from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { showModal, reset, addOrder } from "../Redux/actions/actions";

const ModalOrder = () => {
  const dispatch = useDispatch();
  const modalVisible = useSelector((state) => state.modal);
  const order = useSelector((state) => state.order);

  const OkHandler = () => {
    dispatch(showModal());
    dispatch(reset());
    dispatch(addOrder(order));
  };

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Your Order is ready to take , Enjoy
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => OkHandler()}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
            <Text>Your orders can be found in Account Tab</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "teal",
  },
  buttonClose: {
    backgroundColor: "teal",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalOrder;
