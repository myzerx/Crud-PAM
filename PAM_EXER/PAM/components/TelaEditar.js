import React, {useEffect, useState} from "react";
import { Text, View, TextInput, StyleSheet, Button} from "react-native";

const TelaEditar = ({navigation}) => {

    //const [id] = useState(props.match.params.id_us)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    /*useEffect(()  => {
      const pegarUsuario = async () => {
        fetch("http://localhost/ANDROID/visualizar.php")
            .then((response) => response.json())
            .then((responseJson) => (
                console.log(responseJson)
                //setNome(responseJson.nome),
                //setEmail(responseJson.email)
                //setData(responseJson)
            ))
      }
      pegarUsuario()
    })*/

    return(
        <View style={styles.container}>
      <Text
        style={{
          fontSize: "1.5em",
          fontWeight: "bold",
          textAlign: "center",
          padding: 10,
        }}
      >
        Editar Cadastros
      </Text>

      <Text  style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        underlineColorAndroid="transparent"
        onChangeText={(text) => setNome(text)}
      />

      <Text  style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        underlineColorAndroid="transparent"
        onChangeText={(text) => setEmail(text)}
      />


      <View style={styles.bt}>
        <Button title="Alterar" onPress={() => ins()} />
        <View style={styles.bt}></View>
        <Button title="Voltar" onPress={() => navigation.navigate('TelaPrincipal')} /> </View>
      </View>
   
    );
}
export default TelaEditar;

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
  