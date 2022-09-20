import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/background.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    //backgroundColor: colors.primary,
    borderRadius: 5,
    position: "absolute",
    marginLeft: 20,
    marginTop: 30,
  },
  deleteIcon: {
    //backgroundColor: colors.secondary,
    borderRadius: 5,
    position: "absolute",
    marginLeft: 360,
    marginTop: 30,
  },
  container: { backgroundColor: "black", flex: 1 },
  image: { width: "100%", height: "100%" },
});

export default ViewImageScreen;
