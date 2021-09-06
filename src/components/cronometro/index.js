import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Cronometro() {
  const [startStop, setStartStop] = useState('Start');
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(null);

  function startStopCron() {
    if (timer === null) {
      setStartStop('Stop');
      let a = counter;

      setTimer(
        setInterval(() => {
          setCounter((a += 0.1));
        }, 100),
      );
    } else {
      clearInterval(timer);
      setStartStop('Start');
      setTimer(null);
    }
  }

  function stop() {
    clearInterval(timer);
    setStartStop('Start');
    setCounter(0);
    setTimer(null);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.counterTexto}>{`${counter.toFixed(1)}`}</Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => startStopCron()}>
          <Text style={styles.texto}>{startStop}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => stop()}>
          <Text style={styles.texto}>Zerar</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221D41',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  button: {
    backgroundColor: '#331DF4',
    width: 150,
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
});
