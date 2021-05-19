import React from "react";

import { View, StyleSheet, FlatList, Image } from "react-native";

const Composition = ({ value }) => {
  return (
    <View>
      <FlatList
        data={value.slice(2)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            resizeMode={"contain"}
            style={styles.image}
            source={item.image}
          />
        )}
        inverted={true}
        ListFooterComponent={
          value[0] ? (
            <View style={styles.contianer}>
              <Image
                resizeMode={"contain"}
                style={styles.image}
                source={{
                  uri: value[0].image,
                }}
              />
            </View>
          ) : null
        }
        ListHeaderComponent={
          value[1] ? (
            <View style={styles.contianer}>
              <Image
                resizeMode={"contain"}
                style={styles.image}
                source={{ uri: value[1].image }}
              />
            </View>
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: { flex: 1 },
  image: { width: 250, height: 100 },
});

export default Composition;
