import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        ADS-5 - Desenvolvimento de Sistemas para Mobile
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#331DF4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
