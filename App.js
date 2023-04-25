import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

//janela 1
const Janela1 = ({navigation})=> {
  return (
    <View style={styles.container}>
      <Text>PRIMEIRA JANELA</Text>
      <TouchableOpacity 
      style={{
        borderRadius: 60,
        borderWidth: 1,
        borderColor: 'blue',
        padding: 16,
        margin:20}}
      onPress={()=>navigation.navigate('Janela2')}>
        <Text>TROCA DE JANELA</Text>
      </TouchableOpacity>
    </View>
  )
}

// janela 2
const Janela2 = ({navigation})=> {
  return (
    <View style= {styles.container}>
      <Text>SEGUNDA JANELA</Text>
      <TouchableOpacity 
      style={{
        borderRadius: 60,
        borderWidth: 1,
        borderColor: 'blue',
        padding: 16,
        margin:20}}
      onPress={()=>navigation.navigate('Janela3')}>
        <Text>TROCA DE JANELA</Text>
      </TouchableOpacity>


    </View>
  )
}

// Terceira janela
const Janela3 = ()=> {
  return (
    <View>
      <Text>Janela 3</Text>
    </View>
  )
}

//>>>>>>>>>>>>

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Janela1'>
      <Stack.Screen name ="Janela1" component={Janela1}
      options={{title:"Primeira janela",
       headerTintColor: "#00000055",
       statusBarColor:"blue",
       navigationBarColor: 'green'}} />
      <Stack.Screen name ="Janela2" component={Janela2}/>
      <Stack.Screen name ="Janela3" component={Janela3}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
