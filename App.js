import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigation,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Formulario from "./src/login/Formulario";
import Styles from "./Estilo";

const Stack = createNativeStackNavigator();

//janela 1
const Janela1 = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text>PRIMEIRA JANELA</Text>
      <TouchableOpacity
        style={{
          borderRadius: 60,
          borderWidth: 1,
          borderColor: "blue",
          padding: 16,
          margin: 20,
        }}
        onPress={() => navigation.navigate("Janela2")}
      >
        <Text>TROCA DE JANELA</Text>
      </TouchableOpacity>
    </View>
  );
};

// janela 2
const Janela2 = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text>SEGUNDA JANELA</Text>
      <TouchableOpacity
        style={{
          borderRadius: 60,
          borderWidth: 1,
          borderColor: "blue",
          padding: 16,
          margin: 20,
        }}
        onPress={() => navigation.navigate("Formulario")}
      >
        <Text>TROCA DE JANELA</Text>
      </TouchableOpacity>
    </View>
  );
};

//QUARTA JANELA
const Janela4 = () => {
  return (
    <View style={Styles.container}>
      <Text>QUARTA JANELA</Text>
    </View>
  );
};
//>>>>>>>>>>>>

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Janela1">
        <Stack.Screen
          name="Janela1"
          component={Janela1}
          options={{
            title: "Primeira janela",
            headerTintColor: "#00000055",
            statusBarColor: "skyblue",
            navigationBarColor: "purple",
          }}
        />
        <Stack.Screen name="Janela2" component={Janela2} />
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="Janela4" component={Janela4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
