import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppText from "../components/AppText.js";
import AppButton from "../components/AppButton.js";
import colors from "../config/colors.js";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.jpg")}
        ></Image>
        <AppText style={styles.title}>Phantom交易平台</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => console.log("Login tapped!")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("Register tapped!")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 10,
    width: "100%", //to strech to fit the container
  },
  logo: { width: "100%", height: 100, borderRadius: 20 },
  logoContainer: {
    position: "absolute",
    width: "100%",
    top: 100,
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontStyle: "italic",
  },
});

export default WelcomeScreen;
