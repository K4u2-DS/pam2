import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import estilos from './estilos';

// Import das imagens
const vinhoBranco = require('../../assets/vinho-branco.jpg');
const vinhoRose = require('../../assets/vinho-rose.jpg');
const vinhoTinto = require('../../assets/vinho-tinto.jpg');
const vinhoSeco = require('../../assets/vinho-seco.jpg');

export default function TelaCatalogo() {
  return (
    <ScrollView style={estilos.container}>
      <Text style={estilos.titulo}>Nossos vinhos</Text>
      <Text style={estilos.descricao}>
        Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
      </Text>
      
      <View style={estilos.vinhoContainer}>
        <View style={estilos.imagemContainer}>
          <Image 
            source={vinhoBranco} 
            style={estilos.imagemVinho}
            resizeMode="contain"
          />
        </View>
        <View style={estilos.textoContainer}>
          <Text style={estilos.nomeVinho}>Chatigny Chardonnay</Text>
          <Text style={estilos.descricaoVinho}>
            Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.
          </Text>
        </View>
      </View>

      <View style={estilos.vinhoContainer}>
        <View style={estilos.imagemContainer}>
          <Image 
            source={vinhoRose} 
            style={estilos.imagemVinho}
            resizeMode="contain"
          />
        </View>
        <View style={estilos.textoContainer}>
          <Text style={estilos.nomeVinho}>Concha y Toro Exportacion</Text>
          <Text style={estilos.descricaoVinho}>
            Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.
          </Text>
        </View>
      </View>

      <View style={estilos.vinhoContainer}>
        <View style={estilos.imagemContainer}>
          <Image 
            source={vinhoTinto} 
            style={estilos.imagemVinho}
            resizeMode="contain"
          />
        </View>
        <View style={estilos.textoContainer}>
          <Text style={estilos.nomeVinho}>Portada Winemaker's</Text>
          <Text style={estilos.descricaoVinho}>
            Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.
          </Text>
        </View>
      </View>

      <View style={estilos.vinhoContainer}>
        <View style={estilos.imagemContainer}>
          <Image 
            source={vinhoSeco} 
            style={estilos.imagemVinho}
            resizeMode="contain"
          />
        </View>
        <View style={estilos.textoContainer}>
          <Text style={estilos.nomeVinho}>Elvio Cogno Ravera Barolo</Text>
          <Text style={estilos.descricaoVinho}>
            Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}