import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AddRecipeScreen() {
  return (
    <View style={styles.container}>
      <Text>Add a new recipe here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
