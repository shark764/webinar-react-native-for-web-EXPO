// File: _layout.tsx

import { theme } from "@/src/common/theme";
import DrawerItem from "@/src/components/drawer-item";
import CustomHeader from "@/src/components/header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Platform } from "react-native";
import {
  MD3Theme,
  Drawer as PaperDrawer,
  PaperProvider,
  useTheme,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const isWeb = Platform.OS === "web";
  const insets = useSafeAreaInsets();
  const appTheme = useTheme<MD3Theme>(theme);
  const router = useRouter();

  const handleLogout = () => {
    console.log("User logged out");
    router.replace("/");
  };

  return (
    <PaperProvider theme={theme}>
      <Drawer
        screenOptions={{
          header: () => <CustomHeader />,
          drawerActiveTintColor: appTheme.colors.primary,
          drawerInactiveTintColor: appTheme.colors.onBackground,
          drawerActiveBackgroundColor: appTheme.colors.primaryContainer,
          drawerItemStyle: {
            borderRadius: 8,
          },
        }}
        drawerContent={(props) => (
          <>
            <PaperDrawer.Section
              style={{
                flex: 1,
                paddingTop: insets.top + 20,
                paddingHorizontal: 10,
              }}
            >
              <DrawerItem
                label="Home"
                icon="home"
                route="/screens/home"
                isSelected={
                  props.state.routes[props.state.index].name === "screens/home"
                }
                onPress={() => props.navigation.navigate("screens/home")}
                // Pass the active text and icon color to the DrawerItem component
                activeColor={appTheme.colors.onPrimary}
              />
              <DrawerItem
                label="Reports"
                icon="chart-bar"
                route="/screens/reports"
                isSelected={
                  props.state.routes[props.state.index].name ===
                  "screens/reports"
                }
                onPress={() => props.navigation.navigate("screens/reports")}
                // Pass the active text and icon color to the DrawerItem component
                activeColor={appTheme.colors.onPrimary}
              />
              <DrawerItem
                label="Contact us"
                icon="email"
                route="/screens/contact"
                isSelected={
                  props.state.routes[props.state.index].name ===
                  "screens/contact"
                }
                onPress={() => props.navigation.navigate("screens/contact")}
                // Pass the active text and icon color to the DrawerItem component
                activeColor={appTheme.colors.onPrimary}
              />
              <DrawerItem
                label="Profile"
                icon="account-circle"
                route="/screens/profile"
                isSelected={
                  props.state.routes[props.state.index].name ===
                  "screens/profile"
                }
                onPress={() => props.navigation.navigate("screens/profile")}
                // Pass the active text and icon color to the DrawerItem component
                activeColor={appTheme.colors.onPrimary}
              />
            </PaperDrawer.Section>
            <PaperDrawer.Section
              style={{
                paddingBottom: insets.bottom + 40,
                paddingHorizontal: 10,
              }}
            >
              <PaperDrawer.Item
                // Set the color for the icon and label using their individual props
                label="Logout"
                icon={(props) => (
                  <MaterialCommunityIcons
                    name="logout"
                    size={24}
                    color={props.color}
                  />
                )}
                onPress={handleLogout}
                style={{
                  borderRadius: 8,
                  backgroundColor: "transparent",
                }}
                theme={{
                  colors: {
                    onSecondaryContainer: appTheme.colors.error,
                    onSurfaceVariant: appTheme.colors.error,
                  },
                }}
              />
            </PaperDrawer.Section>
          </>
        )}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerShown: false,
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen name="screens/home" />
        <Drawer.Screen name="screens/contact" />
        <Drawer.Screen name="screens/profile" />
        <Drawer.Screen name="screens/reports" />
      </Drawer>
    </PaperProvider>
  );
}
