import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import capa from '../../assets/capa.jpg';
import styles from './estilos';

export default function TelaInicial() {
  return (
    <ImageBackground 
      source={capa} 
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Adega Preferida</Text>
        <Text style={styles.subtitulo}>
          Aqui você encontra os melhores e mais saborosos vinhos.
        </Text>
      </View>
    </ImageBackground>
  );
}