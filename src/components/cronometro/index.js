import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { styles_cronometro } from './styles_cronometro';

// aplicação principal
export default function Cronometro() {
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
    <View style={styles_cronometro.container}>
      <View style={styles_cronometro.containerTituloAndCounter}>
        <Text style={styles_cronometro.titulo}>Cronômetro</Text>
        <Text style={styles_cronometro.counterTexto}>{`${counter.toFixed(1)}`}</Text>
      </View>

      <View style={styles_cronometro.containerButton}>
        <TouchableOpacity style={styles_cronometro.button} onPress={() => startStopCron()}>
          <Text style={styles_cronometro.texto}>{startStop}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles_cronometro.button} onPress={() => stop()}>
          <Text style={styles_cronometro.texto}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


