import React from "react";
import { View } from "react-native";
import Colors from "../config/colors";

function ListItemSeparator() {
  return (
    <View
      style={{ width: "100%", height: 1, backgroundColor: Colors.lightgrey }}
    ></View>
  );
}

export default ListItemSeparator;
