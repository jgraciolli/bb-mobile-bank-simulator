import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { bbBlue, bbGray, bbLightGray } from "../constants/colors";

export type LabeledInputProps = TextInputProps & {
  label: string;
};

export const LabeledInput = (props: LabeledInputProps) => {
  const { label, ...textInputProps } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={bbGray}
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8,
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 4,
    marginBottom: 4,
    fontSize: 14,
    fontWeight: "bold",
    color: bbBlue,
  },
  input: {
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: bbGray,
    backgroundColor: bbLightGray,
    fontSize: 16,
  },
});
