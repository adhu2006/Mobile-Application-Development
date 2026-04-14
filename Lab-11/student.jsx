import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Student = ({ route, navigation }) => {
  const { studentName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Information</Text>

      <Text style={styles.text}>Name: {studentName}</Text>
      <Text style={styles.text}>Welcome, {studentName}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Student;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
