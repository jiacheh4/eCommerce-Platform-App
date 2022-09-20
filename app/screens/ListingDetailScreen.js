import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/nike.jpg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Nike poster for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <ListItem
          title="Kabi"
          subTitle="5 Listings"
          image={require("../assets/kabi.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    paddingLeft: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  text: {
    color: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default ListingDetailScreen;
