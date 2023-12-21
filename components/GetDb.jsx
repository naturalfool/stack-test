import { Pressable, View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { ref, set, onValue } from "firebase/database";

import db from "../db";

const GetDb = () => {
  const [info, setInfo] = useState();
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");

  const handlePress = () => {
    set(ref(db, "users/" + user), input);
  };

  const handleUserChange = (text) => {
    setUser(text);
  };

  const handleChange = (text) => {
    setInput(text);
  };

  const handleOtherPress = () => {
    const userInfo = ref(db, "users/" + user);

    onValue(userInfo, (snapshot) => {
      const data = snapshot.val();
      setInfo(data);
    });
  };

  return (
    <>
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, padding: 10 }}
          placeholder="Enter user"
          onChangeText={(text) => handleUserChange(text)}
          value={user}
        ></TextInput>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, padding: 10 }}
          placeholder="Enter value"
          onChangeText={(text) => handleChange(text)}
          value={input}
        ></TextInput>
        <Pressable onPress={handlePress} style={styles.button}>
          <Text>Add key/value to DB</Text>
        </Pressable>
      </View>

      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, padding: 10 }}
          placeholder="Enter user"
          onChangeText={(text) => handleUserChange(text)}
          value={user}
        ></TextInput>
        <Pressable onPress={handleOtherPress} style={styles.button}>
          <Text>See value</Text>
        </Pressable>
      </View>

      <View>
        <Text style={{ fontSize: 20 }}>{info ? info : "placeholder"}</Text>
      </View>
    </>
  );
};

export default GetDb;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
  },
});
