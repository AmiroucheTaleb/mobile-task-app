import { ScrollView, ScrollViewBase, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import Header from "./components/Header/Header";
import TaskCard from "./components/TaskCard/TaskCard";
import { useState } from "react";

const TODO_LIST = [
  { id: 1, title: "aller faire les courses", isCompleted: false },
  { id: 2, title: "aller a la pharmacie", isCompleted: true },
  { id: 3, title: "faire de sport ", isCompleted: true },
  { id: 4, title: "envoyé des CV", isCompleted: false },
  { id: 5, title: "coder pandans 2 heures", isCompleted: true },
  { id: 6, title: "aller faire les courses", isCompleted: false },
  { id: 7, title: "aller a la pharmacie", isCompleted: true },
  { id: 8, title: "faire de sport ", isCompleted: true },
  { id: 9, title: "envoyé des CV", isCompleted: false },
  { id: 10, title: "coder pandans 2 heures", isCompleted: true },
];

export default function App() {
  const [todoList, setTodoList] = useState(TODO_LIST);

  function updateTodoList(todo) {
    todoList.find((element) => element.id === todo.id);
  }

  function renderTodoList() {
    return todoList.map((todo) => (
      <View style={s.item} key={todo.id}>
        <TaskCard task={todo} update={updateTodoList} />
      </View>
    ));
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView style={{}}>{renderTodoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>footer</Text>
      </View>
    </>
  );
}
