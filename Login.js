import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Pressable } from 'react-native';
import { useState } from 'react'
import { Button } from 'react-native-web';

export default function App() {
  const Stack = createStackNavigator()
  const {senha, setSenha} = useState("teste")
  const {email, setEmail} = useState("teste")

  function handlerChange(e)
  {
    console.log("valor senha", e)
  }

  const styles = StyleSheet.create({
    texto: 
    {
      fontSize: '50px',
      marginVertical: '5px',
      fontWeight: '600'
    },
    borda:
    {
      height: '80px',
      width: '250px',
    },
    textos:
    {
      marginLeft:'8px',
      marginTop: '10px'
    }
  })

  return (
    <View style={{alignItems: 'center', width: '100%'}}>
      <View>
        <Text style={styles.texto}>LOGIN</Text>
      </View>
      <View style={styles.borda}>
        <Text style={styles.textos}>email: </Text>
        <TextInput
        style={{backgroundColor: 'lightgray', borderRadius: '5px'}}
        value={email}
        onChangeText={e => handlerChange(e)}
        />
        <Text style={styles.textos}>senha: </Text>
        <TextInput
        style={{backgroundColor: 'lightgray', borderRadius: '5px'}}
        secureTextEntry={true}
        value={senha}
        onChangeText={e => handlerChange(e)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            width: '250px',
            height: '40px',
            backgroundColor: 'lightgray',
            marginTop: '100px',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <Pressable
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px'
          }}
        >
          <Text>Cadastrar</Text>
        </Pressable>
      </View>
    </View>
  );
};