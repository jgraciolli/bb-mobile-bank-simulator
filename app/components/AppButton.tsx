import React from "react";
import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
import { bbBlue, bbYellow } from "../constants/colors";

export type AppButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export function AppButton({
  title,
  onPress,
  disabled = false,
  style,
  textStyle,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: bbYellow,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: bbBlue,
    fontSize: 16,
    fontWeight: "600",
  },
});
