import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Styles from "../../Estilo";
import { ScrollView } from "react-native-gesture-handler";
import Entrada from "../componentes/Entrada";
// Formulario
const Formulario = () => {
  // estado
  const [nome, setNome] = useState("nome");
  const [sobrenome, setSobrenome] = useState("sobrenome");
  const [clicou, setClicou] = useState(false);

  useEffect(() => {
    setNome();
  }, [clicou]);

  return (
    <ScrollView>
      <View style={Styles.container}>

        <Entrada tipo="Nome"  cor='red' />
        <Entrada tipo="Email" cor='blue' />
        <Entrada tipo="Idade" cor='pink' />

        <TouchableOpacity
          onPress={() => {
            setClicou(true);
          }}
          style={Styles.botao}
        >
          <Text>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Formulario;
