import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "./Tab.style";

const Tab = (currentTab) => {
  return (
    <View style={s.container}>
      <TouchableOpacity>
        <Text style={[s.text, s.active]}>All (4)</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={s.text}>In progress (1)</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={s.text}>done (3)</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tab;
