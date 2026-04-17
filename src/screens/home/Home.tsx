import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import styles from './HomeStyle';
import Rodape from '../../components/rodape/Rodape';
import {Logo} from '../../components/logo/Logo';

export default function Home() {
  return (
    <View style={styles.container}>
      <view style={styles.logoContainer}></view>
      <Logo />
      <view/>
      <view style={styles.entradaContainer}></view>
      <Logo />
      <Text>meu primeiro componente</Text>
      <StatusBar style="auto" />
      <Rodape />

    </View>
  );
}
