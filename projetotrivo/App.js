import React, {useState} from "react"
import {StyleSheet, View, Text} from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dados from "./context/dadosContext"
import Inicial from "./telas/Inicial"
import Entrar from "./telas/Entrar"
import Cadastrar from "./telas/Cadastrar"
import Home from "./telas/Home"

// Cria a navegação
const Stack = createStackNavigator();

export default function() {
  const [entrar, setEntrar] = useState([])
  const [cadastrar, setCadastrar] = useState([])

  return(
    <Dados.Provider value={{entrar, setEntrar, cadastrar, setCadastrar}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
          <Stack.Screen name="Inicial" component={Inicial} />
          <Stack.Screen name="Entrar" component={Entrar} />
          <Stack.Screen name="Cadastrar" component={Cadastrar} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Dados.Provider>
  )
}