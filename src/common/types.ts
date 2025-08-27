import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Href } from "expo-router";

export type NavItem = {
  name: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  route: Href;
};
