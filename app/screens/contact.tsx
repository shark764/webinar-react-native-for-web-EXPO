import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Linking, Platform, ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Divider,
  Text,
  TextInput,
  useTheme
} from "react-native-paper";

// This is the main component for the contact screen. It displays
// contact information and a simple form.
export default function ContactScreen() {
  const theme = useTheme();
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSendMessage = () => {
    // This is a placeholder for sending an email. In a real app, you would
    // typically use an API to handle the form submission.
    console.log(`Sending message from ${email}: ${message}`);
    alert("Message sent successfully!");
    setEmail("");
    setMessage("");
  };

  const openInMaps = () => {
    const address = "1600 Amphitheatre Parkway, Mountain View, CA";
    const url = Platform.select({
      ios: `maps:0,0?q=${address}`,
      android: `geo:0,0?q=${address}`,
      web: `https://www.google.com/maps/place/${encodeURIComponent(address)}`,
    });

    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.heading}>
          Contact Us
        </Text>
        <Text variant="bodyLarge" style={styles.subheading}>
          We&apos;d love to hear from you!
        </Text>

        <Divider style={styles.divider} />

        {/* --- Contact Information Section --- */}
        <Card style={styles.contactCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>
              Get in Touch
            </Text>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={24}
                color={theme.colors.onSurface}
              />
              <Text variant="bodyMedium" style={styles.infoText}>
                123 Main Street, Anytown, USA
              </Text>
            </View>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color={theme.colors.onSurface}
              />
              <Text variant="bodyMedium" style={styles.infoText}>
                info@yourapp.com
              </Text>
            </View>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons
                name="phone-outline"
                size={24}
                color={theme.colors.onSurface}
              />
              <Text variant="bodyMedium" style={styles.infoText}>
                +1 (123) 456-7890
              </Text>
            </View>
            <Button mode="text" onPress={openInMaps} style={styles.mapButton}>
              Open in Maps
            </Button>
          </Card.Content>
        </Card>

        <Divider style={styles.divider} />

        {/* --- Contact Form Section --- */}
        <Card style={styles.contactCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>
              Send a Message
            </Text>
            <TextInput
              label="Your Email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              style={styles.input}
              keyboardType="email-address"
            />
            <TextInput
              label="Your Message"
              value={message}
              onChangeText={setMessage}
              mode="outlined"
              multiline
              numberOfLines={5}
              style={[styles.input, styles.messageInput]}
            />
            <Button
              mode="contained"
              onPress={handleSendMessage}
              style={styles.submitButton}
            >
              Send Message
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  content: {
    width: "100%",
    maxWidth: 900,
  },
  heading: {
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  subheading: {
    marginBottom: 20,
    textAlign: "center",
  },
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  contactCard: {
    width: "100%",
    maxWidth: 600,
    marginVertical: 10,
  },
  sectionTitle: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "#333",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  infoText: {
    marginLeft: 10,
    color: "#555",
  },
  mapButton: {
    marginTop: 15,
  },
  input: {
    marginBottom: 10,
  },
  messageInput: {
    height: 120,
  },
  submitButton: {
    marginTop: 10,
  },
});
