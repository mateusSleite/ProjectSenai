import React from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList } from 'react-native';


export default function ModalUsuario({ visible, onClose, usuarios, deletar }) {

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ border: "solid 1px black", width: "260px", height: "150px", borderRadius: "10px", marginBottom: "20px" }}>
                <View style={{ marginTop: "5px", marginLeft: "10px" }}>
                    <Text>Nome: {item.nome} </Text>
                    <Text>Idade: {item.idade} </Text>
                    <Text>Sexo: {item.sexo} </Text>
                    <Text>Email: {item.email} </Text>

                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity

                            onPress={() => deletar(index)}
                            style={{
                                width: "8em",
                                innerHeight: "10px",
                                padding: '10px',
                                backgroundColor: "lightgray",
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
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: 300 }}>
                    <Text>Usuários Cadastrados:</Text>
                    <FlatList
                        data={usuarios}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                    />
                    <TouchableOpacity onPress={onClose} style={{ marginTop: 10, backgroundColor: 'lightgray', padding: 10, borderRadius: 5 }}>
                        {console.log(visible)}
                        <Text>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )

}

