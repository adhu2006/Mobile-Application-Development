import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    navigation.navigate("Student", { studentName: name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Student Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
