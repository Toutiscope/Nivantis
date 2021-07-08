import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Calculator from './components/Calculator.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Calculator />
      <StatusBar style="auto" />
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEF2F6',
    flex: 1,
  },
});
