import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Avatar,
  Card,
  Divider,
  Surface,
  Switch,
  Text,
  useTheme,
} from "react-native-paper";

// This is the main component for the profile screen. It displays
// a user's profile information and settings.
export default function ProfileScreen() {
  const theme = useTheme();
  const [isNotificationsEnabled, setIsNotificationsEnabled] =
    React.useState(false);

  // Helper function to toggle the switch's state
  const onToggleSwitch = () =>
    setIsNotificationsEnabled(!isNotificationsEnabled);

  return (
    // The ScrollView component is used to ensure the content is
    // scrollable, especially on smaller screens.
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.heading}>
          User Profile
        </Text>
        <Text variant="bodyLarge" style={styles.subheading}>
          Manage your personal information and preferences.
        </Text>

        <Divider style={styles.divider} />

        {/* --- Profile Card Section --- */}
        <Card style={styles.profileCard}>
          <View style={styles.profileHeader}>
            {/* Display a user avatar */}
            <Avatar.Text
              size={80}
              label="JS"
              style={{ backgroundColor: theme.colors.primary }}
            />
            <View style={styles.profileInfo}>
              <Text variant="titleLarge">Jane Smith</Text>
              <Text variant="bodyMedium">Product Designer</Text>
            </View>
          </View>
          <Card.Content>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons
                name="email"
                size={20}
                color={theme.colors.onSurfaceVariant}
              />
              <Text variant="bodyMedium" style={styles.infoText}>
                jane.smith@example.com
              </Text>
            </View>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons
                name="phone"
                size={20}
                color={theme.colors.onSurfaceVariant}
              />
              <Text variant="bodyMedium" style={styles.infoText}>
                +1 (555) 123-4567
              </Text>
            </View>
          </Card.Content>
        </Card>

        <Divider style={styles.divider} />

        {/* --- Settings Section --- */}
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Settings
        </Text>
        <Surface style={styles.settingsSurface} elevation={2}>
          <View style={styles.settingRow}>
            <Text variant="bodyLarge">Enable notifications</Text>
            <Switch
              value={isNotificationsEnabled}
              onValueChange={onToggleSwitch}
              color={theme.colors.primary}
            />
          </View>
        </Surface>
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
  profileCard: {
    width: "100%",
    maxWidth: 600,
    marginVertical: 10,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  profileInfo: {
    marginLeft: 20,
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
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#333",
  },
  settingsSurface: {
    padding: 20,
    width: "100%",
    maxWidth: 600,
    borderRadius: 8,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
