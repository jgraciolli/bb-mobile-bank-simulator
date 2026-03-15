import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { AppButton } from "../components";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Tela inicial.</Text>
      <AppButton title="Ir para Login" onPress={() => router.push("/login")} />
      <AppButton
        title="Ir para Registro"
        onPress={() => router.push("/register")}
      />
      <AppButton
        title="Fazer Transferência"
        onPress={() => router.push("/transfer")}
      />
      <AppButton title="Ver Sucesso" onPress={() => router.push("/success")} />
    </View>
  );
};

export default HomeScreen;
