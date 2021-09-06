import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Cronometro from './components/cronometro';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          barStyle="dark-content"
          backgroundColor="#331DF4"
        />
        <Cronometro />
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
  },
});
