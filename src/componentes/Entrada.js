import { View, Text, TextInput } from "react-native";
import Styles from "../../Estilo";

const Entrada = (props) => {
    const {tipo, cor} = props;
  return (
    <View>
      <TextInput
        style={{backgroundColor: cor}}
        placeholder={tipo}
        keyboardType="email-address"
        textContentType="telephoneNumber"
      />
    </View>
  );
};

export default Entrada;
