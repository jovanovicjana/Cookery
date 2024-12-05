import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Cookery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F2F2F2", // Boja pozadine headera
    padding: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: "Lilita-One-Regular",
    fontWeight: "bold",
    color: "#D63724",
  },
});

export default CustomHeader;
