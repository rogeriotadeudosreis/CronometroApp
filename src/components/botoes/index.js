import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export function ButtonsStartClear() {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.texto}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  texto: {
    color: '#FFF',
    fontSize: 18,
  },
});
