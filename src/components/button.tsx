import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";

type ButtonProps = {
  onPress: () => void;
  title?: string;
  children?: React.ReactNode;
};

// This is the generic button component for iOS and Web.
const Button = ({ onPress, title, children }: ButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: theme.colors.primary }]}
    >
      <Text style={[styles.buttonText, { color: theme.colors.onPrimary }]}>
        {title || children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default Button;
