import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContexto } from "./Context";

export default function Usuario(props) {

    const {utils, setContexto} = useContext(UtilsContexto)


    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray" }}>
            <View style={{ marginTop: "50px"}}>
            <Text style={{ fontSize: "70px"}}>Usuarios </Text>
            </View>
            <View style={{border: "solid 1px black", width: "500px", height: "100px", borderRadius: "10px", marginBottom:"689px"}}>
                <View style={{marginTop: "5px", marginLeft: "10px"}}>
                <Text>Nome: {utils.nome} </Text>
                <Text>Idade: {utils.idade} </Text>
                <Text>Sexo: {utils.sexo} </Text>
                <Text>Email: {utils.email} </Text>
                </View>

            </View>
        </View>
    );
}