import { StyleSheet } from "react-native";
import { bbBlue, bbWhite } from "../constants/colors";

export const globalStyles = StyleSheet.create({
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
});
