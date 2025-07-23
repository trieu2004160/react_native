import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import type { Todo } from "../../types/model";

interface Props {
  todolist: Todo[];
  deleteTodo: (id: number) => void;
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
    // alignItems: "center",
    // justifyContent: "center",
  },
  todo: {
    color: "red",
    backgroundColor: "#FDD835",
    padding: 50,
    borderRadius: 5,
    marginTop: 50,
  },
});

export default function ListTodo(props: Props) {
  const { todolist } = props;
  return (
    <FlatList
      data={todolist}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => props.deleteTodo(item.id)}>
          <View>
            <Text style={styles.todo}>{item.text}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
