import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity, Button} from "react-native";
import '../components/style/style.css';

const TelaDeletar = ({ navigation }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getUsuarios = async () => {
            fetch("http://localhost/Aula/PAM/android/lista.php")
            .then((response) => response.json())
            .then((responseJson) => (
                //console.log(responseJson),
                setData(responseJson)
            ))
        }
        getUsuarios(); 
    }, [])

        const pegarUsuario = async (idUsuario) => {
            fetch("http://localhost/Aula/PAM/android/visualizar.php?id=" + idUsuario )
            .then((response) => response.json())
            .then((responseJson) => (
                console.log(responseJson),
                //setData(responseJson)
                navigation.navigate('TelaEditar')
            ))
        };

        
  
    const apagarUsuario = async (idUsuario) => {
        await fetch("http://localhost/Aula/PAM/android/deletar.php?id=" + idUsuario)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            if(responseJson.mensagem == "Sucesso!!"){
                alert("Usuário apagado com sucesso!")
                getUsuarios();
            }else{
                alert("Ocorreu um erro!")
            }
        }).catch(() => {
        console.log("Erro")
        })
    }

    return(
        
        <View style={styles.container}>

            <Text
                    style={{
                    fontSize: "1.5em",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: 10,
                    marginLeft:"10%",
                    marginRight: "55%",
                    }}
                >
                    Listas de Cadastros
                </Text>

            <div>
                <table className="Tabela">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(data).map(usuarios => (
                            <tr key={usuarios.Id}>
                                <td>{usuarios.Id}</td>
                                <td>{usuarios.Nome}</td>
                                <td>{usuarios.Email}</td>
                                
                                <td><Button onPress={() => pegarUsuario(usuarios.Id)} title="Editar"  /></td>
                                <td><Button onPress={() => apagarUsuario(usuarios.Id)} title="Deletar"  /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <View style={styles.botao}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('TelaPrincipal')}>
                    <Text style={styles.btnText}>VOLTAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

};
export default TelaDeletar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        width: '100%',
        height: '100%',
      },
      btnText: {
        color: 'white',
      },
      botao:{
        alignItems: 'center', 
        padding: 20,
      },
      btn:{
        width:"40%",
        backgroundColor:"#930D0D",
        borderRadius:25,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        
      },
    
});