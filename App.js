import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import List from "./screens/List.js";
import Calculator from "./screens/Calculator.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
import { ApiContext } from "./utils/ApiContext";

const Stack = createStackNavigator();

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get data from API
    const fetchData = async () => {
      const result = await axios(
        "https://www.montpellier-meilleur-ville.site/api/api/api.php"
      );
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <ApiContext.Provider value={data}>
        <Stack.Navigator>
          <Stack.Screen
            name="List"
            component={List}
            options={{
              title: "Liste des médicaments",
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
        </Stack.Navigator>
      </ApiContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF2F6",
    flex: 1,
  },
});
