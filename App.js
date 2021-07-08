import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import Header from './components/Header.js';
import Calculator from './components/Calculator.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Calculator />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F6',
    // alignItems: 'center',
    // justifyContent: 'center',
    // color: 'blue',
  },
});
