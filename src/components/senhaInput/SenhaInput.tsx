import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './SenhaInputStyle';
import { SenhaBotoes } from '../senhaBotoes/SenhaBotoes';

interface SenhaInputProps{
    senha: string
}

export function SenhaInput(props : SenhaInputProps) {
    return (
        <>
            <TextInput
                placeholder='Senha...'
                style={styles.input}
                value={props.senha}
            />
        </>
    );
}