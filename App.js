import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Image, FlatList, SectionList, Switch } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from './Cadastro';
import Login from './Login';
import Usuario from './Usuario';
import { UtilsContexto } from "./Context";

export default function App() {

  const Stack = createStackNavigator()
  const [utils, setUtils] = useState({})

  const [senha, setSenha] = useState("Teste")
  const [inicio, setInicio] = useState(false)
  const array = ["numero 1", "numero 2"]
  const array2 = [{
    title: "Main dishes",
    data: ['Pizza', 'Burguer'],
  }, {
    title: "Teste",
    data: ['Pizza', 'Burguer'],
  }]

  function handlerChange(e) {
    console.log("valor senha", e.target.value)
  }

  return (
    <NavigationContainer>
      <UtilsContexto.Provider value={{ utils, setUtils }}>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="Cadastro" options={{ headerShown: false }} component={Cadastro} />
          <Stack.Screen name="Usuario" options={{ headerShown: false }} component={Usuario} />
        </Stack.Navigator>
      </UtilsContexto.Provider>
    </NavigationContainer>
  )

  // return (
  //   <View style={styles.container}>

  //     <Switch
  //       onValueChange={() => setInicio(!inicio)}
  //       value={inicio}
  //       trackColor={{false: '#767577', true: '#81b0ff'}}
  //       thumbColor={"#f5dd4b"}
  //       activeThumbColor={"#f4f3f4"}
  //     />

  //     <SectionList
  //       sections={array2}
  //       keyExtractor={(item, index) => item+index}
  //       renderItem={({item}) => (
  //         <Text style={{color:"green"}}>{item}</Text>
  //       )}
  //       renderSectionHeader={({section: {title}}) => (
  //         <Text style={{color:"red"}}>{title}</Text>
  //       )}

  //     />
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //     <TextInput
  //       secureTextEntry={true}
  //       placeholder = "Escreva sua Senha"
  //       value={senha}
  //       onChangeText={e => setSenha(e)}
  //     />
  //     <Text>{senha}</Text>
  //     <TextInput
  //       multiline
  //       maxLength={40}
  //       numberOfLines={5}
  //       style={styles.textArea}
  //       onChangeText={e => console.log('text area', e)}
  //     />
  //     <Button
  //       onPress={() => console.log("FUI pressionado")}
  //       title="ME CLIQUE"
  //       color={"#841584"}
  //     ></Button>
  //     <TouchableOpacity
  //       style = {{
  //         width:"200px",
  //         innerHeight:"40px",
  //         backgroundColor:"gray"
  //       }}>
  //       <Text>TouchableOpacity</Text>
  //     </TouchableOpacity>
  //     <TouchableWithoutFeedback onPress={() => console.log("withou feedback")}>
  //       <View style={{
  //         width:"200px",
  //         innerHeight:"40px",
  //         backgroundColor:"black",
  //         color:"white"
  //       }}>
  //           <Text style={{color:"white"}}>TouchableWithoutFeedback</Text>
  //       </View>
  //     </TouchableWithoutFeedback>
  //     <Image
  //       style={styles.logo}
  //       source={{
  //         uri:"https://p2.trrsf.com/image/fget/cf/800/450/middle/images.terra.com/2020/09/01/1584147355038.jpg"
  //       }}  
  //     />
  //     {array.map((item) => {
  //       return(
  //         <Text>{item}</Text>
  //       )
  //     })}
  //     <FlatList 
  //       data={array}
  //       renderItem={({item}) => <Text>{item}</Text>}
  //       keyExtractor={(item) => item}
  //     />
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textArea: {
//     backgroundColor: 'black',
//     color: 'white',
//   },
//   logo:{
//     width:"200px",
//     height:"200px"
//   }
// });