import { ScrollView, ScrollViewBase, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import Header from "./components/Header/Header";
import TaskCard from "./components/TaskCard/TaskCard";
import { useState } from "react";
import Tab from "./components/Tab/Tab";

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
  const [activeTab, setActiveTab] = useState("inProgress");

  function changeActiveTab(selectedTab) {
    setActiveTab(selectedTab);
  }

  function getFiltredTodoList() {
    switch (activeTab) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => !todo.isCompleted);
      case "done":
        return todoList.filter((todo) => todo.isCompleted);
    }
  }

  function updateTodoList(todo) {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    const indexToUpdate = todoList.findIndex((todo) => todo.id === updatedTodo.id);

    const updatedTodoList = [...todoList];

    updatedTodoList[indexToUpdate] = updatedTodo;
    setTodoList(updatedTodoList);
  }

  function renderTodoList() {
    return getFiltredTodoList().map((todo) => (
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
        <Tab currentTab={activeTab} changeActiveTab={changeActiveTab} todoList={todoList} />
      </View>
    </>
  );
}
