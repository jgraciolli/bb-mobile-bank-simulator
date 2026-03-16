import { Stack } from "expo-router";
import { bbBlue, bbWhite } from "./constants/colors";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerStyle: { backgroundColor: bbBlue },
        headerTintColor: "#f4ffff",
        headerTitleStyle: { fontWeight: "600" },
        headerBackButtonDisplayMode: "minimal",
        contentStyle: { backgroundColor: bbWhite },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="register" options={{ title: "Registro" }} />
      <Stack.Screen name="home" options={{ title: "Home" }} />
      <Stack.Screen name="transfer" options={{ title: "Transferência" }} />
      <Stack.Screen name="success" options={{ title: "Sucesso" }} />
    </Stack>
  );
}
