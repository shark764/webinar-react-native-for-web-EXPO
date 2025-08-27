import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Appbar } from "react-native-paper";
import { NavItem } from "../common/types";

type HeaderItemProps = {
  item: NavItem;
  onPress: (item: NavItem) => void;
};

const HeaderItem = ({ item, onPress }: HeaderItemProps) => {
  const handleOnPress = () => {
    onPress(item);
  };

  return (
    <Appbar.Action
      key={item.name}
      icon={({ color }) => (
        <MaterialCommunityIcons
          name={item.icon as any}
          color={color}
          size={24}
        />
      )}
      color="white"
      onPress={handleOnPress}
    />
  );
};

export default HeaderItem;
