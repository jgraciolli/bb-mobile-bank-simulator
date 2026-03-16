import { Link } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppButton, LabeledInput } from "../components";
import { bbBlue, bbWhite } from "../constants/colors";

const LoginScreen = () => {
  const [userCpf, setUserCpf] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao banco do brasil!</Text>
      <Text style={styles.subtitle}>Acesse sua conta para continuar</Text>

      <LabeledInput
        label="CPF"
        value={userCpf}
        onChangeText={setUserCpf}
        placeholder="000.000.000-00"
        keyboardType="number-pad"
        maxLength={11}
      />

      <LabeledInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha..."
        secureTextEntry
      />

      <AppButton
        title="ACESSAR CONTA"
        onPress={() => {
          // colocar logica de login depois
          navigate("/home");
        }}
      />
      <View style={styles.registerContainer}>
        <Text>
          Não tem uma conta?{" "}
          <Link href="/register" style={styles.registerButton}>
            CADASTRE-SE.
          </Link>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: bbWhite,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 16,
    color: bbBlue,
    marginBottom: 24,
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  registerButton: {
    color: bbBlue,
  },
});

export default LoginScreen;
