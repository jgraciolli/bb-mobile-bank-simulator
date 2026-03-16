import { navigate } from "expo-router/build/global-state/routing";
import { Text, View } from "react-native";
import { AppButton } from "../components";
import { globalStyles } from "../styles/globalStyles";

const SuccessScreen = () => {
  return (
    <View style={globalStyles.container}>      
      <Text style={globalStyles.title}>Transferência realizada com sucesso!</Text>
      <Text style={globalStyles.subtitle}>O valor foi enviado ao destinatário.</Text>

      <AppButton title="Voltar ao início" onPress={() => navigate("/home")} />
    </View>
  );
};

export default SuccessScreen;
