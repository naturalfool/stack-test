import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import firebase from "./firebaseApp"; // Import your Firebase configuration

import db from "./db";

console.log(db);
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello There</Text>
      <StatusBar style="auto" />
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
});
