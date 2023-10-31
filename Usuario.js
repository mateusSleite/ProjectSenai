import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContexto } from "./Context";

export default function Usuario(props) {

    const { utils, setContexto } = useContext(UtilsContexto)


    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray", height: "100%" }}>
            <View style={{ marginTop: "50px" }}>
                <Text style={{ fontSize: "70px" }}>Usuarios </Text>
            </View>
            {container(utils)}
            {container(utils)}

        </View>
    );
}

function container(props) {

    return (
        <View style={{ border: "solid 1px black", width: "500px", height: "100px", borderRadius: "10px", marginBottom: "20px" }}>
            <View style={{ marginTop: "5px", marginLeft: "10px" }}>
                <Text>Nome: {props.nome} </Text>
                <Text>Idade: {props.idade} </Text>
                <Text>Sexo: {props.sexo} </Text>
                <Text>Email: {props.email} </Text>
            </View>
        </View>
    )
}