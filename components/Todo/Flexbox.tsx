import React from "react";
import { View, Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 20,
    flexDirection: "row",
  },
});
const Flexbox = () => {
  return (
    <View style={styles.container}>
      <Text>example 1</Text>
      <Text>example 2</Text>
      <Text>example 3</Text>
      <Text>example 4</Text>
    </View>
  );
};
export default Flexbox;
