import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import {
  Button,
  Card,
  Divider,
  List,
  Surface,
  Text,
  useTheme,
} from "react-native-paper";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type ContextType = {
  x: number;
};

// This component creates a professional-looking dashboard for the app.
export default function Home() {
  const theme = useTheme();
  const router = useRouter();

  // Get the window width outside of the animated component
  const screenWidth = Dimensions.get("window").width;

  const [items, setItems] = useState([
    {
      id: "1",
      title: "Task 1: Prepare for demo",
      icon: "clipboard-check-outline",
    },
    { id: "2", title: "Task 2: Review Q3 reports", icon: "file-chart-outline" },
    {
      id: "3",
      title: "Task 3: Update contact list",
      icon: "account-multiple-outline",
    },
  ]);

  // New state for the animated card
  const scale = useSharedValue(1);
  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  // Event handlers for the animated card
  const onHoverIn = () => {
    scale.value = withSpring(1.05);
  };

  const onHoverOut = () => {
    scale.value = withSpring(1);
  };

  // Logic for the swipe-to-dismiss gesture
  const onRemove = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const ListItem = ({
    item,
    screenWidth,
  }: {
    item: (typeof items)[0];
    screenWidth: number;
  }) => {
    const translateX = useSharedValue(0);
    const itemHeight = useSharedValue(70);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: translateX.value }],
        height: itemHeight.value,
      };
    });

    const panGesture = useAnimatedGestureHandler<
      PanGestureHandlerGestureEvent,
      ContextType
    >({
      onStart: (_, ctx) => {
        ctx.x = translateX.value;
      },
      onActive: (event, ctx) => {
        translateX.value = event.translationX + ctx.x;
      },
      onEnd: (event) => {
        const shouldBeDismissed =
          Math.abs(event.translationX) > screenWidth * 0.3;
        if (shouldBeDismissed) {
          translateX.value = withTiming(
            screenWidth * 2 * Math.sign(event.translationX)
          );
          itemHeight.value = withTiming(0, { duration: 500 }, () => {
            runOnJS(onRemove)(item.id);
          });
        } else {
          translateX.value = withSpring(0);
        }
      },
    });

    const onPressDismiss = () => {
      translateX.value = withTiming(screenWidth * 2 * Math.sign(1));
      itemHeight.value = withTiming(0, { duration: 500 }, () => {
        runOnJS(onRemove)(item.id);
      });
    };

    return (
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[styles.listItem, animatedStyle]}>
          <List.Item
            title={item.title}
            left={() => <List.Icon icon={item.icon as any} />}
            right={() => (
              <Pressable onPress={onPressDismiss}>
                <MaterialCommunityIcons
                  name="close"
                  size={24}
                  color={theme.colors.error}
                />
              </Pressable>
            )}
          />
        </Animated.View>
      </PanGestureHandler>
    );
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.heading}>
          Products & Retail Management
        </Text>
        <Text variant="bodyLarge" style={styles.subheading}>
          Quick overview of your business.
        </Text>

        <Divider style={styles.divider} />

        {/* --- Dashboard Cards Section --- */}
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Dashboard
        </Text>
        <View style={styles.cardRow}>
          <Animated.View
            style={[styles.animatedCardWrapper, animatedCardStyle]}
          >
            <Pressable
              onPressIn={onHoverIn}
              onPressOut={onHoverOut}
              onHoverIn={onHoverIn}
              onHoverOut={onHoverOut}
            >
              <Card
                style={[styles.card, { margin: 0 }]}
                onPress={() => alert("No products in your inventory")}
              >
                <Card.Content style={{ alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="package-variant-closed"
                    size={48}
                    color={theme.colors.primary}
                  />
                  <Text variant="titleMedium" style={{ marginTop: 10 }}>
                    Products
                  </Text>
                  <Text variant="bodyMedium" style={{ textAlign: "center" }}>
                    Manage your product inventory and details.
                  </Text>
                </Card.Content>
              </Card>
            </Pressable>
          </Animated.View>
          <Card
            style={styles.card}
            onPress={() => alert("No retail locations available")}
          >
            <Card.Content style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="storefront"
                size={48}
                color={theme.colors.primary}
              />
              <Text variant="titleMedium" style={{ marginTop: 10 }}>
                Retail Locations
              </Text>
              <Text variant="bodyMedium" style={{ textAlign: "center" }}>
                View and manage all your retail locations.
              </Text>
            </Card.Content>
          </Card>
        </View>

        <Divider style={styles.divider} />

        {/* --- Swipe-to-Dismiss Section --- */}
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Swipe-to-Dismiss
        </Text>
        <View style={styles.listContainer}>
          {items.map((item) => (
            <ListItem key={item.id} item={item} screenWidth={screenWidth} />
          ))}
        </View>

        <Divider style={styles.divider} />

        {/* --- Quick Actions Section --- */}
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Quick Actions
        </Text>
        <View style={styles.buttonRow}>
          <Button
            mode="contained"
            onPress={() => router.push("/screens/reports")}
            style={styles.button}
          >
            View Reports
          </Button>
          <Button
            mode="outlined"
            onPress={() => router.push("/screens/profile")}
            style={styles.button}
          >
            Edit Profile
          </Button>
        </View>

        {/* A simple surface to show theme colors */}
        <Text variant="titleMedium" style={styles.sectionSubTitle}>
          App Theme
        </Text>
        <Surface style={[styles.surface, { elevation: 1 }]}>
          <Text variant="bodySmall" style={{ color: theme.colors.onSurface }}>
            This app uses a custom theme.
          </Text>
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
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#333",
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 10,
    color: "#555",
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
  animatedCardWrapper: {
    width: "100%",
    maxWidth: 350,
    margin: 10,
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  surface: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    width: "100%",
    maxWidth: 350,
  },
  listContainer: {
    width: "100%",
    maxWidth: 600,
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
});
