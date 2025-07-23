import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
interface IProps {
  onPress: () => void;
  title: string;
}
const Minebutton = (props: IProps) => {
  const { onPress, title } = props;
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.5 }]}
      onPress={onPress}
    >
      <AntDesign name="adduser" size={24} color="black" />
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  container: {
    alignItems: "center",
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#000",
    flexDirection: "row",
    gap: 10,
  },
});
export default Minebutton;
