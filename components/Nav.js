import React from "react";
import { StyleSheet, View } from "react-native";

export default function Nav() {
  return (
    <View style={styles.nav}>
      <View
        style={styles.icon}
        title="Go to List"
        // onPress={() => navigation.navigate("List", { name: "Jane" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="160 -160 512 512"
        >
          <path
            d="M272-160h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16zm-16 96h-64v-64h64v64zM272 32h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16zm-16 96h-64V64h64v64zM272 224h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16zm-16 96h-64v-64h64v64zM361.6-144h300.8c5.3 0 9.6 4.3 9.6 9.6v12.8c0 5.3-4.3 9.6-9.6 9.6H361.6c-5.3 0-9.6-4.3-9.6-9.6v-12.8c0-5.3 4.3-9.6 9.6-9.6zM361.6-80h300.8c5.3 0 9.6 4.3 9.6 9.6v12.8c0 5.3-4.3 9.6-9.6 9.6H361.6c-5.3 0-9.6-4.3-9.6-9.6v-12.8c0-5.3 4.3-9.6 9.6-9.6zM361.6 48h300.8c5.3 0 9.6 4.3 9.6 9.6v12.8c0 5.3-4.3 9.6-9.6 9.6H361.6c-5.3 0-9.6-4.3-9.6-9.6V57.6c0-5.3 4.3-9.6 9.6-9.6zM361.6 112h300.8c5.3 0 9.6 4.3 9.6 9.6v12.8c0 5.3-4.3 9.6-9.6 9.6H361.6c-5.3 0-9.6-4.3-9.6-9.6v-12.8c0-5.3 4.3-9.6 9.6-9.6zM361.6 240h300.8c5.3 0 9.6 4.3 9.6 9.6v12.8c0 5.3-4.3 9.6-9.6 9.6H361.6c-5.3 0-9.6-4.3-9.6-9.6v-12.8c0-5.3 4.3-9.6 9.6-9.6zM361.6 304h300.8c5.3 0 9.6 4.3 9.6 9.6v12.8c0 5.3-4.3 9.6-9.6 9.6H361.6c-5.3 0-9.6-4.3-9.6-9.6v-12.8c0-5.3 4.3-9.6 9.6-9.6z"
            fill="#fff"
          />
        </svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    alignItems: "center",
    backgroundColor: "#0596DE",
    elevation: 5,
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: 45,
    borderTopLeftRadius: 45,
    // borderTopRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 2,
  },
  icon: {
    backgroundColor: "#0596DE",
    borderRadius: 60,
    height: 60,
    width: 60,
    marginTop: "-30px",
    marginLeft: "auto",
    marginRight: 15,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    paddingTop: 15,
  },
});
