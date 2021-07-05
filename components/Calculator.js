import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  Pressable,
} from "react-native";

export default function Calculator() {
  const [text, onChangeText] = React.useState(null);
//   const { onPress, title = 'Save' } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculatrice</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Nom du médicament"
        value={text}
      />
      <Pressable style={styles.button} onPress={() => Alert.alert("Bien joué, c'est tout pour moi ;)")}>
        <Text style={styles.text}>Calculer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    color: "#444E59",
        fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    marginHorizontal: 32,
    marginTop: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#0596DE",
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    margin: 12,
    paddingLeft: 15,
    paddingRight: 15,
    marginHorizontal: 32,
},
button: {
    alignItems: 'center',
    backgroundColor: '#0596DE',
    borderRadius: 50,
    elevation: 3,
    justifyContent: 'center',
    marginVertical: 32,
    marginHorizontal: 32,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
