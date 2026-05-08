import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './HomeStyle';
import { Logo } from '../../components/logo/Logo';
import { SenhaInput } from '../../components/senhaInput/SenhaInput'
import { SenhaBotoes } from '../../components/senhaBotoes/SenhaBotoes';

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <SenhaBotoes/>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <SenhaInput />
      </View>
      <Text>Meu primeiro componente!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


