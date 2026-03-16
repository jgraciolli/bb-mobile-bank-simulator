import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AppButton } from "../components";
import { bbGray, bbLightGray } from "../constants/colors";

const LoginScreen = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Tela de login.</Text>
      <AppButton title="Ir para Home" onPress={() => router.push("/home")} />
      <AppButton
        title="Ir para Registro"
        onPress={() => router.push("/register")}
      />
      <AppButton
        title="Fazer Transferência"
        onPress={() => router.push("/transfer")}
      />
      <AppButton title="Ver Sucesso" onPress={() => router.push("/success")} />
      <Text style={{ color: bbGray }}>Teste de texto com cor cinza.</Text>
      <TextInput
        style={styles.input}
        placeholder="000.000.000-00"
        placeholderTextColor={bbGray}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor={bbGray}
        secureTextEntry
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: bbLightGray,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});

export default LoginScreen;
