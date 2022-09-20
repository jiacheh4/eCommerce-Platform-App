import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

//不显示图片如果没有传进image参数（react技巧）
//{image && <Image style={styles.image} source={image} />}

function ListItem({
  title,
  subTitle,
  image,
  IconCompnent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
        <View style={styles.container}>
          {IconCompnent}
          {image && <Image style={styles.image} source={image} />}
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white, // set background color for the container
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 32,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontWeight: "400",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "400",
    paddingTop: 7,
    color: colors.grey,
  },
});

export default ListItem;
