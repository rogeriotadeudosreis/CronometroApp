import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Cronometro from './components/cronometro';
import Cronometro2 from './components/cronometro/index2';
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
        <Cronometro2 />
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
