import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/MainNavigator";
import { useFonts } from "expo-font";
import { initializeDatabase } from "./utils/database";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  //ucitaj fontive
  const [fontsLoaded] = useFonts({
    "Lilita-One-Regular": require("./assets/fonts/LilitaOne-Regular.ttf"),
  });

  useEffect(() => {
    initializeDatabase(); // Kreiranje baze i tabela
  }, []);

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
