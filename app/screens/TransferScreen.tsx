import { navigate } from "expo-router/build/global-state/routing";
import { useState } from "react";
import { Text, View } from "react-native";
import { AppButton, LabeledInput } from "../components";
import { globalStyles } from "../styles/globalStyles";

const TransferScreen = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Tela de transferência</Text>

      <LabeledInput
        label="Destinatário"
        placeholder="Nome do destinatário..."
        value={recipient}
        onChangeText={setRecipient}
      />

      <LabeledInput
        label="Valor"
        placeholder="Valor a ser transferido..."
        value={amount}
        onChangeText={setAmount}
        keyboardType="number-pad"
      />

      <AppButton title="Transferir" onPress={() => navigate("/success")} />
    </View>
  );
};

export default TransferScreen;
