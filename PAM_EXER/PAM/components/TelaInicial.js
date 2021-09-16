import React, { useState } from "react";
import {Text, View, TextInput, StyleSheet, Button, Alert,Image, AppState, SafeAreaView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";




const TelaInicial = ({navigation}) => (

      <View style={styles.container}>
        
     <TouchableOpacity
     style={styles.smallButton0} onPress= {() => navigation.navigate('Login')}>
    <Text style={styles.smallButtonText0} >Entrar</Text></TouchableOpacity>
      </View>

    );
  

;

TelaInicial.navigationOptions = {
  title: 'Login',
}


export default TelaInicial;

  
  const styles = StyleSheet.create({
    container: {
      
      
    },
    smallButton0:{
      marginTop: "50%",
      marginLeft: "40%",
      width:"25%",
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
  