import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Button} from "react-native";




const TelaInserir = ({navigation}) => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [ms, setMs] = useState("x");


  const ins = async () => {
    try { 
      const resp = await fetch("http://localhost/Aula/PAM_EXER/ANDROID/inserir.php", {
        method: "POST",
        body: JSON.stringify({
          senha: senha,
          email: login,
          nome: nome,
        })
      });

      const js = await resp.json();
      console.log(js);
      if (js == "Sucesso!!") {
        setMs(js);
        alert ("Cadastrado(a) com Sucesso!")
        navigation.navigate('Login')
      } else {
        setMs(js);
        alert ("Houve um erro ao se cadastrar, tente novamente")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: "1.4em",
          fontStyle: "italic",
          fontWeight: "bold",
          textAlign: "center",
          marginLeft:'4%'
        }}
      >
        Inserir Usuário 
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o seu Nome"
        underlineColorAndroid="transparent"
        onChangeText={(text) => setNome(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o seu email"
        underlineColorAndroid="transparent"
        onChangeText={(text) => setLogin(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a senha"
        secureTextEntry="true"
        underlineColorAndroid="transparent"
        onChangeText={(text) => setSenha(text)}
      />


      <View style={styles.bt}>
        <Button title="Cadastrar" onPress={() => ins()} />
        <View style={styles.bt}></View>
        <Button title="Voltar" onPress={() => navigation.navigate('TelaPrincipal')} />
      </View>

    </View>
    
  );
  
};
 
export default TelaInserir;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 170,
    width: '80%',
    height: '100%',
    marginLeft:"10%",
  },
  input: {
    borderBottomWidth: 1,
    borderColor:"#303030",
    padding: 10,
    margin: 10,
    backgroundColor: '#f1f3f6',
    borderRadius: 8,
    paddlingHorizontal: 10,
    alignItems: 'center',
    
  },
  label:{
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  bt: {
    width:"40%",
    padding: 10,
    alignItems: 'center',
    marginLeft: "25%",
    width: '35%',
    flexDirection: "row",
    
  },
});
