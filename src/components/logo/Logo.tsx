import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './LogoStyle';

const LOGO_IMG = 
    require('../../../assets/senha.png');

export function Logo() {
  return (
    <View>
        <Text style={styles.titulo}>
            Gerador de Senha
        </Text>
        <Image style={styles.imagem} source={LOGO_IMG} />
    </View>
  );
}