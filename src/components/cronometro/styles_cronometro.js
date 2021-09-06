import {StyleSheet} from 'react-native'

export const styles_cronometro = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#221D41',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 30,
      color: '#FFF',
    },
    texto: {
      margin: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
    },
    button: {
      backgroundColor: '#331DF4',
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
    },
    counterTexto: {
      fontSize: 36,
      color: '#FFF',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    containerButton: {
      flexDirection: 'row',
    },
    containerTituloAndCounter: {
      alignItems: 'center',
    },
  });

  