import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import { AppFormField, SubmitButton, AppForm } from "../components/form";

//账号密码格式规范
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.jpg")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)} //when handleSubmit it goes to here
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 40,
  },
});
export default LoginScreen;
