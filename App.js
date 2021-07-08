import * as React from "react";
import "react-native-gesture-handler";
import { StyleSheet, View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import List from "./components/List.js";
import Calculator from "./components/Calculator.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={List}
          options={{
            title: "Liste",
            headerStyle: {
              backgroundColor: "#0596DE",
            },
            headerTintColor: "#fff",
          }}
        />

        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={
            (({ route }) => ({ title: route.params.name }),
            {
              title: "Calculatrice",
              headerStyle: {
                backgroundColor: "#0596DE",
              },
              headerTintColor: "#fff",
            })
          }
        />

        {/* <View style={styles.container}>
        <Header />
        <Stack.Screen name="Calculator" component={Calculator} />
        <StatusBar style="auto" />
        <Nav />
      </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF2F6",
    flex: 1,
  },
});
