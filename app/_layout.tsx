import { Stack } from "expo-router";
import { bbBlue, bbLightGray, bbYellow } from "./constants/colors";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerStyle: { backgroundColor: bbBlue },
        headerTintColor: bbYellow,
        headerTitleStyle: { fontWeight: "600" },
        contentStyle: { backgroundColor: bbLightGray },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="register" options={{ title: "Registro" }} />
      <Stack.Screen name="transfer" options={{ title: "Transferência" }} />
      <Stack.Screen name="success" options={{ title: "Sucesso" }} />
    </Stack>
  );
}
