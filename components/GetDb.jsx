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
      <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder="Enter user"
          onChangeText={(text) => handleUserChange(text)}
          value={user}
        ></TextInput>
        <TextInput
          style={style.input}
          placeholder="Enter value"
          onChangeText={(text) => handleChange(text)}
          value={input}
        ></TextInput>
        <Pressable onPress={handlePress} style={style.button}>
          <Text>Add key/value to DB</Text>
        </Pressable>
      </View>

      <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder="Enter user"
          onChangeText={(text) => handleUserChange(text)}
          value={user}
        ></TextInput>
        <Pressable style={style.button} onPress={handleOtherPress}>
          <Text>See value</Text>
        </Pressable>
      </View>

      <View style={style.container}>
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

const style = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: "5%",
    width: "100%",
    borderWidth: 4,
    borderColor: "black",
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 5,
  },
  button: {
    padding: 10,
    backgroundColor: "#f44",
  },
});
