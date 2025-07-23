import { Keyboard, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import type { Todo } from "./types/model";
import InputTodo from "./components/Todo/Input.todo";
import ListTodo from "./components/Todo/list.to";
import Minebutton from "./components/button/minebutton";
import Flexbox from "./components/Todo/Flexbox";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const [todolist, setTodoList] = useState<Todo[]>([]);

  const addtodo = (text: string) => {
    alert(text);
    const todo = { id: randomInteger(1, 10000), text };
    setTodoList([...todolist, todo]);
  };
  const deleteTodo = (id: number) => {
    const newtodo = todolist.filter((todo) => todo.id !== id);
    setTodoList(newtodo);
  };
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    // <Flexbox />
    // <TouchableOpacity onPress={() => Keyboard.dismiss()}>
    //   <View>
    //     {/*  */}
    //     <InputTodo addtodo={addtodo} />
    //     <ListTodo todolist={todolist} deleteTodo={deleteTodo} />
    //   </View>
    // </TouchableOpacity>
    <NavigationContainer>
      <View style={styles.container}>
        <InputTodo addtodo={addtodo} />
        <ListTodo todolist={todolist} deleteTodo={deleteTodo} />
        <Minebutton onPress={() => alert("Button Pressed")} title="Press Me" />
        <Flexbox />
      </View>
    </NavigationContainer>
  );
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
    borderWidth: 1,
  },
});
