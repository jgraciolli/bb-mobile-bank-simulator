import { navigate } from "expo-router/build/global-state/routing";
import { useState } from "react";
import { Text, View } from "react-native";
import { AppButton, LabeledInput } from "../components";
import { globalStyles } from "../styles/globalStyles";

const handleRegister = () => {
  // implementar lógica de registro aqui
  navigate("/");
};

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [userCpf, setUserCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Registre-se:</Text>

      <LabeledInput
        label="Nome"
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome completo"
      />

      <LabeledInput
        label="CPF"
        value={userCpf}
        onChangeText={setUserCpf}
        placeholder="000.000.000-00"
        keyboardType="number-pad"
        maxLength={11}
      />

      <LabeledInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />

      <LabeledInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <AppButton title="Registrar" onPress={() => handleRegister()} />
    </View>
  );
};

export default RegisterScreen;
