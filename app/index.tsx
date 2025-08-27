import { router } from "expo-router";
import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Divider,
  TextInput,
  useTheme
} from "react-native-paper";

// This component creates a responsive login form that looks good on both
// web and mobile platforms. It uses a Card to contain the form elements
// for a clean, modern look.
export default function App() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // This is a placeholder for your actual login logic.
    // In a real application, you would handle authentication here.
    console.log("Attempting login with:", email, password);
    alert("Login successful! Redirecting to home page.");
    router.push("/screens/home");
  };

  return (
    // The main container for the login page. It uses flexbox to center
    // the content both horizontally and vertically.
    <View style={styles.container}>
      {/* The Card component provides a nice visual container for the form. */}
      <Card style={styles.card}>
        <Card.Title
          title="Welcome Back"
          titleVariant="headlineMedium"
          titleStyle={{ textAlign: "center", fontWeight: "bold" }}
        />
        <Card.Content>
          <View style={styles.formContainer}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              mode="outlined"
              style={styles.input}
            />
            {/* The "Forgot Password" link */}
            <Button
              mode="text"
              onPress={() => console.log("Forgot password pressed")}
              style={{ alignSelf: "flex-end" }}
            >
              Forgot Password?
            </Button>
            <Divider style={styles.divider} />
            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.loginButton}
              labelStyle={{ color: theme.colors.onPrimary }}
            >
              Log in
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

// Stylesheet for the component.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  card: {
    width: "100%",
    // On web, we use a fixed width to prevent the card from becoming too wide.
    // On mobile, the card will take up a larger portion of the screen.
    maxWidth: Platform.OS === "web" ? 400 : undefined,
    borderRadius: 12,
    paddingVertical: 20,
  },
  formContainer: {
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
  divider: {
    marginVertical: 20,
  },
  loginButton: {
    marginTop: 10,
  },
});
