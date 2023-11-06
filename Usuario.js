import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContexto } from "./Context";

export default function Usuario(props) {

    const { utils, setUtils } = useContext(UtilsContexto)

    const deletar = (index) => {
        const updatedUsuarios = [...utils.Usuarios];
        updatedUsuarios.splice(index, 1);
        setUtils({ ...utils, Usuarios: updatedUsuarios });
    }

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray", height: "100%" }}>
            <View style={{ marginTop: 50 }}>
                <Text style={{ fontSize: 70 }}>Usuarios </Text>
            </View>
            {container(utils, deletar)}

        </View>
    );
}

function container(props, deletar) {
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ border: "solid 1px black", width: "500px", height: "150px", borderRadius: "10px", marginBottom: "20px" }}>
                <View style={{ marginTop: "5px", marginLeft: "10px" }}>
                    <Text>Nome: {item.nome} </Text>
                    <Text>Idade: {item.idade} </Text>
                    <Text>Sexo: {item.sexo} </Text>
                    <Text>Email: {item.email} </Text>

                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => deletar(index)}
                            style={{
                                width: "16em",
                                innerHeight: "10px",
                                padding: '10px',
                                backgroundColor: "white",
                                borderRadius: '10px',
                                marginTop: '10px',
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "1em"
                            }}
                        >
                            <Text>Deletar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <FlatList
            data={props.Usuarios}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}