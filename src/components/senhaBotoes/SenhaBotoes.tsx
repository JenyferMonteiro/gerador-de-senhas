import React, { useState } from 'react';
import { Button, Pressable, View, Text } from 'react-native';

import { styles } from './SenhaBotoesStyle';
import { SenhaInput } from '../senhaInput/SenhaInput';
import gerarSenha from '../../services/senhaService';
import * as clipboard from 'expo-clipboard';

export function SenhaBotoes() {

    const[senhaGerada, setSenhaGerada] = useState('')
    function gerarSenhaAleatoria(){
        let aux = gerarSenha()
        setSenhaGerada(aux)
    }

    function copiar(){
        clipboard.setStringAsync(senhaGerada);
    }

  return (
    <View>
        <SenhaInput senha={senhaGerada}/>
        <Pressable
            onPress={gerarSenhaAleatoria}
            style={styles.button}
        >
            <Text style={styles.text}>Gerar Senha</Text>
        </Pressable>
        <Pressable
            onPress={copiar}
            style={styles.button}
        >
            <Text style={styles.text}>Copiar</Text>
        </Pressable>
    </View>
  );
}