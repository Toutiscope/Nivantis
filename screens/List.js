import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { ApiContext } from "../utils/ApiContext";

export default function List({ navigation }) {
  const api = useContext(ApiContext);
  const { data } = api;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.list}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#2BAAAC" : "white",
              },
              styles.button,
            ]}
            // title={item.nom}
            onPress={() =>
              /* 1. Navigate to the Details route with params */
              navigation.push("Calculator", {
                itemId: item.id,
              })
            }
          >
            <Text style={styles.text}>{item.nom}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
  button: {
    elevation: 2,
    borderRadius: 6,
    marginHorizontal: 20,
    marginVertical: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
  },
});
