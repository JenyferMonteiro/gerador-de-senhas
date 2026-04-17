import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c53d6a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    flexDirection: 'column',
    borderColor: 'yelow',
    borderWidth: 4,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginBottom: 50,
    padding: 20,
    backgroundColor: '#b9345c',
  },

  entradaContainer: {
    width:'80%',
    borderColor: 'blue',
    borderWidth: 4,
    alignItems: 'center',
    flexDirection:'column'
  }
});

export default styles;