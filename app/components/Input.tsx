import React from "react";
import {
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
} from "react-native";
import { bbBlue, bbGray, bbLightGray } from "../constants/colors";

export type InputProps = TextInputProps & {
  containerStyle?: ViewStyle;
};

export function Input({ containerStyle, style, ...rest }: InputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={bbGray}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8,
  },
  input: {
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: bbBlue,
    backgroundColor: bbLightGray,
    fontSize: 16,
  },
});
