import React, { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import firebase from "../firebaseApp";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(firebase);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <Pressable onPress={handleSignUp} style={style.button}>
        <Text>Sign Up</Text>
      </Pressable>
      <Pressable onPress={handleSignIn} style={style.button}>
        <Text>Sign In</Text>
      </Pressable>
      <Pressable onPress={handleSignOut} style={style.button}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    width: "30%",
    margin: 10,
    color: "#ffffff",
  },
});
