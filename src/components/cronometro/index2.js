import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// aplicação principal
export default function Cronometro2() {
  const [counter, setCounter] = useState('00:00:00');
  const [cron, setCron] = useState(null);

  var horas = 0;
  var minutos = 0;
  var segundos = 0;

  var tempo = 1000; //Configurando 01 segundo em milésimos

  //   Função para start do cronômetro
  function startStopCron() {
    setCron(setInterval(() => {timer();}, tempo))}

  //   Função para pause do cronômetro
  function pause() {
    clearInterval(cron);
  }

  //Para o temporizador e limpa as variáveis
  function stop() {
    /*O clearInterval() limpa o timer configurado pela função setInterval(). 
    Ele desativa a função e não executa a função definida pelo temporizador.
     */
    clearInterval(cron);
    horas = 0;
    minutos = 0;
    segundos = 0;

    setCounter('00:00:00');
  }

  //   Função principal do cronômetro, faz a contagem e exibição
  function timer() {
    segundos++; //Incrementa +1 na variável segundos

    if (segundos == 59) {
      //Verifica se deu 59 segundos
      segundos = 0; //Volta os segundos para 0
      minutos++; //Adiciona +1 na variável minutos

      if (minutos == 59) {
        //Verifica se deu 59 minutos
        minutos = 0; //Volta os minutos para 0
        horas++; //Adiciona +1 na variável hora
      }
    }

    //Cria uma variável com o valor tratado HH:minutos:segundos
    var format =
      (horas < 10 ? '0' + horas : horas) +
      ':' +
      (minutos < 10 ? '0' + minutos : minutos) +
      ':' +
      (segundos < 10 ? '0' + segundos : segundos);

    //Insere o valor tratado no elemento counter
    // document.getElementsByName('counter').innerText = format;
    setCounter(format);

    //Retorna o valor tratado
    return format;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Cronômetro</Text>
        <Text style={styles.counterTexto}>{counter}</Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => startStopCron()}>
          <Text style={styles.texto}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pause()}>
          <Text style={styles.texto}>Pause</Text>
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
});
