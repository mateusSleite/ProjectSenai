import { Text, Button, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-web";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { UtilsContexto } from "./Context";
import { useContext, useState } from 'react';



const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "lightgray"
    },
    texto1: {
        fontSize: "4em",
        marginTop: "1em",
        marginBottom: "0.5em",
        textAlign: "center",
    },
    caixa: {

    },
    textimput: {
        width: "25em",
        backgroundColor: "white",
        borderRadius: "5px",
        marginTop: "0.3em",
        marginBottom: "1.8em"

    }
});

export default function Login(props) {
    const { utils, setUtils } = useContext(UtilsContexto)

    const [senha, setSenha] = useState("")
    const [usuario, setUsuario] = useState("")

    function goToCadastro() {
        props.navigation.navigate('Cadastro')
    }

    function goToUsuario() {
        if (usuario == utils.nome && senha == utils.senha) {
            props.navigation.navigate('Usuario')
        }

    }

    return (

        <View style={{ backgroundColor: "lightgray", height: '100%' }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.texto1}>LOGIN</Text>
                    <View style={styles.caixa}>
                        <Text>Email:</Text>
                        <TextInput
                            value={usuario}
                            onChangeText={e => setUsuario(e)}
                            style={styles.textimput} />
                    </View>
                    <View style={styles.caixa}>
                        <Text>Senha</Text>
                        <TextInput
                            secureTextEntry={true}
                            value={senha}
                            onChangeText={e => setSenha(e)}
                            style={styles.textimput} />
                    </View>
                </View>
                <TouchableOpacity onPress={() => goToUsuario()}
                    style={{
                        width: "20em",
                        height: "3em",
                        innerHeight: "40px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        marginTop: "13em"
                    }}
                >
                    <Text >Login</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={() => goToCadastro()}>
                    <View style={{
                        width: "200px",
                        innerHeight: "40px",
                        backgroundColor: "lightgray",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        marginTop: "1em",
                        cursor: "pointer"
                    }}>
                        <Text style={{ color: "black" }}>Cadastrar</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}