import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import React, { useState } from "react";
import { Pressable } from "react-native";
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

// This component is for web platforms. It includes a hover state.
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
  const [isHovered, setIsHovered] = useState(false);

  // Determine the background color based on hover and active state.
  const backgroundColor = isSelected
    ? theme.colors.primaryContainer
    : isHovered
    ? theme.colors.surfaceVariant
    : "transparent";

  // Determine the icon color based on hover and active state.
  const iconColor = isSelected
    ? activeColor
    : isHovered
    ? theme.colors.primary
    : theme.colors.onBackground;

  // Determine the label color based on hover and active state.
  const labelColor = isSelected
    ? activeColor
    : isHovered
    ? theme.colors.primary
    : theme.colors.onBackground;

  return (
    // We use Pressable to handle hover events.
    <Pressable
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={{
        borderRadius: 8,
        backgroundColor,
      }}
    >
      <Link href={route} asChild>
        <Drawer.Item
          {...rest}
          label={label}
          icon={() => (
            <MaterialCommunityIcons name={icon} size={24} color={iconColor} />
          )}
          active={isSelected}
          onPress={onPress}
          style={{
            borderRadius: 8,
            backgroundColor: isSelected ? "transparent" : undefined,
          }}
          // We use the theme prop to override the label color based on the state.
          theme={{
            colors: {
              onSecondaryContainer: labelColor,
            },
          }}
        />
      </Link>
    </Pressable>
  );
};

export default DrawerItem;
