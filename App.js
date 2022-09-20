import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  Alert,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  Dimensions,
  TextInput,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  console.log("============App executed=============");

  //return <WelcomeScreen />;
  //return <ViewImageScreen />;
  //return <ListingDetailScreen />;
  //return <MessagesScreen />;
  //return <AccountScreen />;
  //return <ListingScreen />;
  //return <ListingEditScreen />;
}
