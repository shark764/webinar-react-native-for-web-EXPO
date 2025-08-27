import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import { Appbar, useTheme } from "react-native-paper";
import { NavItem } from "../common/types";
import HeaderItem from "./header-item";

// Define the navigation items and their corresponding icons and routes.
const navItems: NavItem[] = [
  { name: "Home", icon: "home", route: "/screens/home" },
  { name: "Reports", icon: "chart-bar", route: "/screens/reports" },
  { name: "Contact us", icon: "email", route: "/screens/contact" },
  { name: "Profile", icon: "account-circle", route: "/screens/profile" },
];

export default function CustomHeader() {
  const router = useRouter();
  const isWeb = Platform.OS === "web";
  const navigation = useNavigation();
  const theme = useTheme();

  const onPress = (item: NavItem) => {
    router.push(item.route);
  };

  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.onPrimaryContainer }}>
      {/* This is the hamburger icon to toggle the drawer on mobile. 
        We use the DrawerActions.toggleDrawer() to open/close the drawer.
        The icon is not shown on web since the drawer is typically visible.
      */}

      <Appbar.Action
        icon="menu"
        color="white"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />

      {isWeb && <Appbar.Content title="Sick App" color="white" />}

      {/* Navigation items */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 1,
        }}
      >
        {navItems.map((item) => {
          // On mobile, we use the icon-only Appbar.Action as before.
          // On web, we'll use a Button component for better text support.
          return <HeaderItem key={item.name} item={item} onPress={onPress} />;
        })}
      </View>
    </Appbar.Header>
  );
}
