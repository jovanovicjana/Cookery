import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function MyRecipesScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>My Recipes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
