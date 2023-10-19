
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Image, Switch } from 'react-native';
import { useState } from 'react'

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
    marginTop: '10px'
  }
})

export default function App() {
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState();
  const [email, setEmail] = useState();
  const [inicio, setInicio] = useState(false);

  function handlerChange(e)
  {
    console.log("valor senha", e)
  }

  // function setInicio(e)
  // {
  //   if(e)
  //     console.log('sim');
  //   else  
  //     console.log('não')
  // }

  return (
    <View style={{
      alignItems: 'center', 
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
      }}>
      <View style={styles.borda}>
        <View 
          style={{
            display: 'flex',
            alignItems: 'center' 
          }}
        >
          <Image 
            style={{
              height: '100px',
              width:'120px',
              marginVertical: '10px'
            }}
            source={{
              uri:"https://i.pinimg.com/564x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
            }}
          />
        </View>
        <Text style={styles.textos}>Nome: </Text>
        <TextInput
          style={{backgroundColor: 'lightgray', borderRadius: '5px'}}
          value={nome}
          onChangeText={e => setNome(e)}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start'
          }}
        >
          <View>
            <Text style={styles.textos}>Idade: </Text>
            <TextInput
              style={{backgroundColor: 'lightgray', borderRadius: '5px', width: '120px', marginRight: '10px'}}
              value={idade}
              onChangeText={e => setIdade(e)}
            />
          </View>
          <View>
            <Text style={styles.textos}>Sexo: </Text>
            <TextInput
              style={{backgroundColor: 'lightgray', borderRadius: '5px', width: '120px'}}
              value={sexo}
              onChangeText={e => setSexo(e)}
            />
          </View>
        </View>
        <Text style={styles.textos}>Email: </Text>
        <TextInput
          style={{backgroundColor: 'lightgray', borderRadius: '5px'}}
          value={email}
          onChangeText={e => setEmail(e)}
        />
        <Text style={styles.textos}>Senha: </Text>
        <TextInput
          style={{backgroundColor: 'lightgray', borderRadius: '5px'}}
          secureTextEntry={true}
          value={senha}
          onChangeText={e => handlerChange(e)}
        />
        <Text style={styles.textos}>Confirmar senha: </Text>
        <TextInput
          style={{backgroundColor: 'lightgray', borderRadius: '5px'}}
          secureTextEntry={true}
          value={senha}
          onChangeText={e => handlerChange(e)}
        />
        <Text style={{marginTop: '10px'}}>Deseja receber notificação?</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={inicio ? '#f5dd4b' : '#f4f3f4'}
          
          onValueChange={() => setInicio(!inicio)}
          value={inicio}
        />
        {/* <Text>{inicio}</Text> */}
        
      </View>
      <View style={{marginBottom: '200px'}}>
        <TouchableOpacity
          style={{
            width: '250px',
            height: '40px',
            backgroundColor: 'lightgray',
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