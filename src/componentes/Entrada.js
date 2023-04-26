import { View, Text, TextInput } from "react-native";
import Styles from "../../Estilo";

const Entrada = (props) => {
  return (
    <View>
      <TextInput
        style={Styles.caixa}
        placeholder="Nome"
        keyboardType="email-address"
        textContentType="telephoneNumber"
      />
    </View>
  );
};

export default Entrada;
