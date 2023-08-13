import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "./Tab.style";

const Tab = ({ currentTab, changeActiveTab }) => {
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => changeActiveTab("all")}>
        <Text style={[s.text, currentTab === "all" && s.active]}>All (4)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeActiveTab("inProgress")}>
        <Text style={[s.text, currentTab === "inProgress" && s.active]}>In progress (1)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeActiveTab("done")}>
        <Text style={[s.text, currentTab === "done" && s.active]}>Done (3)</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tab;
