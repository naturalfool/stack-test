import { Pressable, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { ref, set, onValue } from "firebase/database";

import db from "../db";

const GetDb = () => {
  const [info, setInfo] = useState("db placeholder");

  const handlePress = () => {
    const usersInfo = ref(db, "users/jonnywb");

    onValue(usersInfo, (snapshot) => {
      const data = snapshot.val();
      setInfo(data);
    });
  };
  return (
    <View>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text>Get DB</Text>
      </Pressable>

      <Text>{info}</Text>
    </View>
  );
};

export default GetDb;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
  },
});
