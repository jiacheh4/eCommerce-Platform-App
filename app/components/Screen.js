import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View, SafeAreaView } from "react-native";

//根据设备类型设置默认屏幕
function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1, //解决没有占有整个屏幕的问题
  },
});

export default Screen;
