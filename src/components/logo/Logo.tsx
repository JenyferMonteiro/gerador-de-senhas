import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './LogoStyle';

let imagem=require('../../../assets/png-clipart-padlock-continental-line-white-rectangle')

export function Logo() {
  return (
    <View>
            <Image source={imagem}
            style = {styles.logo} />

            <Text style={styles.titulo}>
              gerador de senhas
            </Text>
    </View>
  );
}