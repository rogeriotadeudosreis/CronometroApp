import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// aplicação principal
export default function Cronometro2() {
  const [startStop, setStartStop] = useState('Start');
  const [counter, setCounter] = useState(0);
  const [cron, setCron] = useState(null);

  var tempo = 100; //Configurando 01 segundo em milésimos

  //   Função para start do cronômetro
  function startStopCron() {
    if (cron === null) {
      setStartStop('Pause');
      let cont = counter;

      setCron(
        setInterval(() => {
          setCounter((cont += 0.1));
        }, tempo),
      );
    } else {
      clearInterval(cron);
      setStartStop('Start');
      setCron(null);
    }
  }

  //Para o temporizador e limpa as variáveis
  function stop() {
    /*O clearInterval() limpa o timer configurado pela função setInterval(). 
    Ele desativa a função e não executa a função definida pelo temporizador.
     */
    clearInterval(cron);
    setStartStop('Start');
    setCounter(0);
    setCron(null);
  }

  //   Função principal do cronômetro, faz a contagem e exibição

  return (
    <View style={styles.container}>
      <View style={styles.containerTituloAndCounter}>
        <Text style={styles.titulo}>Cronômetro</Text>
        <Text style={styles.counterTexto}>{`${counter.toFixed(1)}`}</Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => startStopCron()}>
          <Text style={styles.texto}>{startStop}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => stop()}>
          <Text style={styles.texto}>Stop</Text>
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
