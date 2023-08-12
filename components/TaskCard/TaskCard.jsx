import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { S } from "./TaskCard.style";
import check from "../../assets/check.png";

const TaskCard = () => {
  return (
    <View>
      <TouchableOpacity style={S.button}>
        <Text style={S.text}>passer a la pharmacie</Text>
        <Image style={S.img} source={check} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
