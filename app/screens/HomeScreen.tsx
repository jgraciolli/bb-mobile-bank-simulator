import { navigate } from "expo-router/build/global-state/routing";
import { useState } from "react";
import { Text, View } from "react-native";
import { AppButton } from "../components";
import { globalStyles } from "../styles/globalStyles";

const HomeScreen = () => {
  const [userName, setUserName] = useState("João");
  const [userBalance, setUserBalance] = useState(1250.75);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Olá, {userName} 👋</Text>

      <View style={{ marginTop: 24, width: "100%" }}>
        <Text style={globalStyles.subtitle}>Saldo disponível</Text>
        <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 24 }}>
          R$ {userBalance.toFixed(2).replace(".", ",")} 
        </Text>

        <AppButton title="Depositar" onPress={() => {}} style={{ marginBottom: 12 }} />
        <AppButton title="Sacar" onPress={() => {}} style={{ marginBottom: 12 }} />
        <AppButton title="Transferir" onPress={() => navigate("/transfer")} />
      </View>
    </View>
  );
};

export default HomeScreen;
