import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: 'red', //só para desenvolvimento
    borderWidth: 2,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 50, 
    padding: 20,
    backgroundColor: '#4D4D4D'
  },
  inputContainer: {
    width: '80%',
    borderColor: 'red',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});

export default styles;