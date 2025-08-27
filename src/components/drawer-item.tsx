import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import React from "react";
import { Drawer, useTheme } from "react-native-paper";

type DrawerItemProps = React.ComponentProps<typeof Drawer.Item> & {
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  route: Href;
  isSelected: boolean;
  onPress: () => void;
  // New prop to handle active color
  activeColor: string;
};

// This component is for mobile platforms.
const DrawerItem = ({
  label,
  icon,
  route,
  isSelected,
  onPress,
  activeColor,
  ...rest
}: DrawerItemProps) => {
  const theme = useTheme();

  return (
    <Link href={route} asChild>
      <Drawer.Item
        {...rest}
        label={label}
        icon={() => (
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color={isSelected ? activeColor : theme.colors.onBackground}
          />
        )}
        active={isSelected}
        onPress={onPress}
        style={{
          borderRadius: 8,
          backgroundColor: isSelected
            ? theme.colors.onPrimaryContainer
            : "transparent",
        }}
        // The theme prop is used here to override colors for this specific component instance.
        theme={{
          colors: {
            onSecondaryContainer: isSelected
              ? activeColor
              : theme.colors.onBackground,
          },
        }}
      />
    </Link>
  );
};

export default DrawerItem;
