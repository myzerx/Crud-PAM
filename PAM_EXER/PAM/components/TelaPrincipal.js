import React, { useState } from "react";
import {Text, View, TextInput, StyleSheet, Button, Alert,Image, AppState } from "react-native";

import { TouchableOpacity } from 'react-native'


 
const TelaPrincipal = ({navigation}) => (
 <View style={styles.container}>
  
    <TouchableOpacity
     style={styles.smallButton0} onPress= {() => navigation.navigate('TelaInserir')}>
    <Text style={styles.smallButtonText0} >Cadastro de Usuários</Text></TouchableOpacity>
    

   
    <TouchableOpacity
     style={styles.smallButton1} onPress= {() => navigation.navigate('TelaEditar')} >
    <Text style={styles.smallButtonText0} >Editar Usuários</Text></TouchableOpacity>
  

    <TouchableOpacity
     style={styles.smallButton2} onPress= {() => navigation.navigate('TelaDeletar')}>
    <Text style={styles.smallButtonText0} >Deletar Usuários</Text></TouchableOpacity>
    

 
    <TouchableOpacity 
     style={styles.smallButton3 } onPress= {() => navigation.navigate('Login')} >
    <Text style={styles.smallButtonText0} >Voltar</Text></TouchableOpacity>
    
    </View>
);



TelaPrincipal.navigationOptions = {
title: 'Login',
}
export default TelaPrincipal;

  const styles = StyleSheet.create({
    container:{
   
      
    },
    
    smallButton0:{
      marginTop: "2%",
      marginLeft: "1%",
      width:"98%",
      display: 'flex',
      alignItems: 'center',
      paddingVertical: 14,
      backgroundColor: '#D23919',
      borderRadius: 10,
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 3.5, 


    },
    smallButton1:{
      marginTop: "2%",
      marginLeft: "1%",
      width:"98%",
      display: 'flex',
      alignItems: 'center',
      paddingVertical: 14,
      backgroundColor: '#D23919',
      borderRadius: 10,
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 3.5, 

    },

    smallButton2:{
      marginTop: "2%",
      marginLeft: "1%",
      width:"98%",
      display: 'flex',
      alignItems: 'center',
      paddingVertical: 14,
      backgroundColor: '#D23919',
      borderRadius: 10,
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 3.5, 

    },

    smallButton3:{
      marginTop: "2%",
      marginLeft: "1%",
      width:"98%",
      display: 'flex',
      alignItems: 'center',
      paddingVertical: 14,
      backgroundColor: '#D23919',
      borderRadius: 10,
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 3.5, 
    },
    smallButtonText0:{
      
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: "center",
      marginTop: "%",
      marginRight: "3%"
      
    },
   

  
  });