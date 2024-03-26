import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

const App = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logocompleta.png')} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder=" Insira seu email"
          placeholderTextColor="#FFF"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder=" Insira sua Senha"
          placeholderTextColor="#FFF"
        />
      </View>

      <TouchableOpacity style={[styles.button, styles.entryButton]} 
      onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate("Cadastrar")}>
        <Text style={styles.cadastroText}>
          Não possui uma conta? Cadastre-se!
        </Text>
      </TouchableOpacity>
    </View>


      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 210,
    height: 230,
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 2
  },
  input: {
    backgroundColor: '#000',
    color: '#FFF', 
    fontSize: 14,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 43,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    alignItems: 'center',
    width: 175,
    padding: 10,
    margin: 10,
    borderRadius: 18,
    borderColor: '#7FFF00',
    borderWidth: 3
  },
  buttonText: {
    color: '#7FFF00',
    fontSize: 20,
    fontWeight: 'bold'
  },
  cadastroText: {
    color: '#7FFF00',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textDecorationLine: 'underline',
  }
});

export default App;