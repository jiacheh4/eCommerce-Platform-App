import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText.js";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}></View>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden", // make sure the image isn't covering the boarder
  },
  detailsContainer: { padding: 1 },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontStyle: "normal",
    paddingLeft: 20,
  },
  subTitle: {
    color: colors.secondary,
    marginBottom: 10,
    fontStyle: "normal",
    paddingLeft: 20,
  },
});

export default Card;
