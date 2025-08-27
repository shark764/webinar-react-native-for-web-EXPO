import React from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { Card, Divider, ProgressBar, Text, useTheme } from "react-native-paper";

// This is a placeholder for a simple chart component to demonstrate how you
// could visualize data in your app. In a real-world scenario, you would use
// a charting library like react-native-chart-kit or react-native-svg-charts.
const PlaceholderChart = () => {
  const theme = useTheme();
  const data = [0.2, 0.6, 0.4, 0.8, 0.5];

  return (
    <View style={chartStyles.container}>
      <Text style={chartStyles.title}>Weekly Performance</Text>
      <View style={chartStyles.barContainer}>
        {data.map((value, index) => (
          <View
            key={index}
            style={[
              chartStyles.bar,
              {
                height: `${value * 100}%`,
                backgroundColor: theme.colors.primary,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const chartStyles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    ...Platform.select({
      web: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      default: {
        elevation: 2,
      },
    }),
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  barContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 150,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  bar: {
    width: "15%",
    borderRadius: 5,
  },
});

export default function ReportsScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.heading}>
          Reports
        </Text>
        <Text variant="bodyLarge" style={styles.subheading}>
          Key metrics and data visualizations for your app.
        </Text>

        <Divider style={styles.divider} />

        <PlaceholderChart />

        <Divider style={styles.divider} />

        {/* --- Data Cards Section --- */}
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Performance Metrics
        </Text>
        <View style={styles.cardRow}>
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">Revenue</Text>
              <Text
                variant="displaySmall"
                style={{ color: theme.colors.primary }}
              >
                $12,345
              </Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">New Users</Text>
              <Text
                variant="displaySmall"
                style={{ color: theme.colors.primary }}
              >
                +789
              </Text>
            </Card.Content>
          </Card>
        </View>

        <Divider style={styles.divider} />

        {/* --- Progress Bars Section --- */}
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Progress
        </Text>
        <View style={styles.progressContainer}>
          <View style={styles.taskContainer}>
            <Text variant="bodyMedium">Task A</Text>
            <ProgressBar
              progress={0.7}
              style={styles.progressBar}
              color={theme.colors.secondary}
            />
          </View>
          <View style={styles.taskContainer}>
            <Text variant="bodyMedium">Task B</Text>
            <ProgressBar
              progress={0.4}
              style={styles.progressBar}
              color={theme.colors.tertiary}
            />
          </View>
        </View>
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
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#333",
  },
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  card: {
    width: "100%",
    maxWidth: 350,
    margin: 10,
  },
  progressContainer: {
    width: "100%",
    maxWidth: 600,
    padding: 10,
  },
  taskContainer: {
    marginBottom: 15,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});
