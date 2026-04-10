import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import styles from './HomeStyle';
import { rodape } from '../../components/rodape/Rodape';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>meu primeiro componente</Text>
      <StatusBar style="auto" />

    </View>
  );
}
