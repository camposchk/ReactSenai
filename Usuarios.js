import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const Stack = createStackNavigator()
  const styles = StyleSheet.create({
    texto: 
    {
      fontSize: '50px',
      marginVertical: '5px'
    },
    borda:
    {
      borderColor: 'black',
      borderWidth: '1px',
      height: '80px',
      width: '250px',
      borderRadius: '10px'
    },
    textos:
    {
      marginLeft:'8px'
    }
  })

  return (
    <View /*style={{alignItems: 'center', width: '100%'}}*/>
      <View>
        <Text style={styles.texto}>Usuarios</Text>
      </View>
      <View style={styles.borda}>
        <Text style={styles.textos}>Nome: </Text>
        <Text style={styles.textos}>Idade </Text>
        <Text style={styles.textos}>Sexo </Text>
        <Text style={styles.textos}>Recebe Notificação</Text>
      </View>
    </View>
  );
};