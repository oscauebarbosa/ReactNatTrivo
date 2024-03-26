import React, {useState} from "react"
import {StyleSheet, View, Text} from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dados from "./context/dadosContext"
import Inicial from "./telas/Inicial"
import Entrar from "./telas/Entrar"
import Cadastrar from "./telas/Cadastrar"
import Home from "./telas/Home"
import Receitas from "./telas/Receitas"
import AddReceitas from "./telas/AddReceitas"



const Stack = createStackNavigator();

export default function() {
  const [entrar, setEntrar] = useState([])
  const [cadastrar, setCadastrar] = useState([])
  const [receitas, setReceitas] = useState([])

  return(
    <Dados.Provider value={{entrar, setEntrar, cadastrar, setCadastrar, receitas, setReceitas}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Inicial">
          <Stack.Screen name="Inicial" component={Inicial} />
          <Stack.Screen name="Entrar" component={Entrar} />
          <Stack.Screen name="Cadastrar" component={Cadastrar} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Receitas" component={Receitas} />
          <Stack.Screen name="AddReceitas" component={AddReceitas} />
        </Stack.Navigator>
      </NavigationContainer>
    </Dados.Provider>
  )
}