import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Nivantis</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "#0596DE",
    elevation: 3,
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    // fontSize: 18,
    marginBottom: 10,
    marginTop: 50,
  },
});
