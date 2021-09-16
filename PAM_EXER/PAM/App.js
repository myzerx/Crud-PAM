import React from "react";
import { StyleSheet, Text, View } from "react-native";
 
import Login from "./components/Login"; 
import TelaInicial from "./components/TelaInicial.js";
import TelaInserir from "./components/TelaInserir";
import TelaEditar from "./components/TelaEditar.js";
import TelaPrincipal from "./components/TelaPrincipal.js";
import TelaDeletar from "./components/TelaDeletar.js";



import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={StyleSheet.container}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ title: "Tela Inicial" }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Login" }}/>
        <Stack.Screen name="TelaInserir" component={TelaInserir}options={{ title: "Inserir" }}/>
        <Stack.Screen name="TelaDeletar" component={TelaDeletar}options={{ title: "Deletar" }}/>
        <Stack.Screen name="TelaEditar" component={TelaEditar}options={{ title: "Editar" }}/>
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ title: "Tela Principal" }}/>

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

