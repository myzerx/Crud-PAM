import React, { useState } from "react";
import {Text, View, TextInput, StyleSheet, Button, Alert,Image, AppState } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { TouchableOpacity } from "react-native-gesture-handler";


const Page2 = ({navigation}) => (
  <View style={styles.bt2}>
     <Button title="Cadastrar" 
     onPress= {() => navigation.navigate('TelaPrincipal')} ></Button>
      </View>
);

Page2.navigationOptions = {
  title: 'TelaPrincipal',
}


const Login = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [ms, setMs] = useState(" ? ");

  const consultar = async () => {
    try {
      
      const resp = await fetch("http://localhost/Aula/PAM_EXER/android/usuario.php", {
        method: "POST",

        //mode: "no-cors",
        //credentials: 'same-origin',
        headers: {
          //'Accept': 'application/json',
          //'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          senha: senha,
          email: login
          
        }),
      });
      
      //const js = await resp.json();
      const js = await resp.json();
      //console.log(js);
      if(js == "Ok" ){
       setMs(js);
       navigation.navigate('TelaPrincipal')
       } 
      else{
        setMs(js);
      }
    
    } catch (error) {
      console.error(error);
    }
  };

  const [passwordSecured, setPasswordSecured] = useState(true);
  return (

    <View style={styles.container}>
    
      <Image source={require("../img/react_logo.png")}
      style={ styles.img} />
       <View style={styles.email}>
       <Icon 
      color = '#333'
      name='user'
      type='font-awesome'
      size={25}
      />
      <TextInput
        style={{flex: 1, paddlingHorizontal: 12, marginLeft: '1%',}}
        placeholder="E-mail"
        underlineColorAndroid="transparent"
        onChangeText={ (text)=> setLogin(text) } />
       </View>               
     
       <View style={styles.senha}> 
       <Icon color='#333' name='lock' type='font-awesome' size={25} />
      <TextInput
        style={{flex: 2, paddlingHorizontal: 12, marginLeft: '1%',}}
        placeholder="Senha"
        secureTextEntry={passwordSecured}
        underlineColorAndroid="transparent"
        onChangeText={ (text)=>setSenha(text) }/>

        <TouchableOpacity 
        style={{paddling:4}}
        onPress= {() => {
          setPasswordSecured(!passwordSecured);
        }}
        
        >
          <Icon name= 'eye' type='font-awesome-5' size={20} />
         </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
     style={styles.SmallButton } onPress={() => consultar()} >
      <Text style={styles.button} >Acessar</Text></TouchableOpacity>
      </View>
       
  
   
  );
  // }
};
export default Login;


const styles = StyleSheet.create({
   
  container: {
    width: "100%",
    padding: 10,
    marginBottom: "50%",
   },
   email:{
    marginTop: "10%",
    width: '50%',
    height: "10%",
    marginLeft: "25%",
    backgroundColor: '#f1f3f6',
    borderRadius: 8,
    paddlingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1%',
  },
  senha: {
    width: '50%',
    height: "10%",
    marginLeft: "25%",
    backgroundColor: '#f1f3f6',
    borderRadius: 8,
    paddlingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
 
  button:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: "center",
    marginTop: "1%",
    marginRight: "3%"
    
     },
      img:{
        width:150, height:150, 
        marginLeft:'39%',   
        marginTop: '25%',
        
      },
      SmallButton:{
        marginTop: "2%",
        marginLeft: "38%",
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
        shadowRadius: 3.5, }
});

