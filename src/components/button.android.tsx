import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { useTheme } from "react-native-paper";

type ButtonProps = {
  onPress: () => void;
  title?: string;
  children?: React.ReactNode;
};

// This is the Android-specific button component.
const Button = ({ onPress, title, children }: ButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(theme.colors.onPrimary, false)}
    >
      <View style={[styles.button, { backgroundColor: theme.colors.primary }]}>
        <Text style={[styles.buttonText, { color: theme.colors.onPrimary }]}>
          {title || children}
        </Text>
      </View>
    </TouchableNativeFeedback>
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
