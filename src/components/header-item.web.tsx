import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { NavItem } from "../common/types";

type HeaderItemWebProps = {
  item: NavItem;
  onPress: (item: NavItem) => void;
};

const HeaderItemWeb = ({ item, onPress }: HeaderItemWebProps) => {
  const handleOnPress = () => {
    onPress(item);
  };

  return (
    <Button
      key={item.name}
      mode="text"
      textColor="white"
      onPress={handleOnPress}
      style={styles.webButton}
      labelStyle={styles.webButtonLabel}
    >
      {item.name}
    </Button>
  );
};

export default HeaderItemWeb;

const styles = StyleSheet.create({
  webButton: {
    marginHorizontal: 4,
  },
  webButtonLabel: {
    fontSize: 16,
  },
});
