import React from 'react';
import {Text, View} from 'react-native';
import styles_footer from '../footer/styles_footer';

export default function Footer() {
  return (
    <View style={styles_footer.container}>
      <Text style={styles_footer.texto}>
        ADS-5 - Desenvolvimento de Sistemas para Mobile
      </Text>
    </View>
  );
}
