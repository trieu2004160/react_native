import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import Minebutton from "../button/minebutton";
interface IProps {
  addtodo: (v: string) => void;
}
const InputTodo = (props: IProps) => {
  const [name, setName] = React.useState<string>("trieudanit");
  const { addtodo } = props;
  const handleaddnewtodo = () => {
    if (!name) {
      Alert.alert("Error", "Please enter a todo", [
        {
          text: "cancel",
          onPress: () => console.log("cancel"),
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]);

      return;
    }
    addtodo(name);
    setName(""); // Clear the input after adding the todo
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.todo}
        value={name}
        onChangeText={setName}
        placeholder="Enter todo..."
      />

      <Minebutton onPress={handleaddnewtodo} title="Add Todo" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
    // alignItems: "center",
    // justifyContent: "center",
    marginBottom: 20,
  },
  todo: {
    color: "red",
    backgroundColor: "#FDD835",
    padding: 50,
    borderRadius: 5,
    marginTop: 50,
  },
  button: {
    backgroundColor: "#FDD835",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default InputTodo;
