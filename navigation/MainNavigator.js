import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MyRecipesScreen from "../screens/MyRecipesScreen";
import AddRecipeScreen from "../screens/AddRecipeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import ShoppingListScreen from "../screens/ShoppingListsScreen";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Ionicons } from "react-native-vector-icons";
// import { forceTouchHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/ForceTouchGestureHandler";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Sakriva podrazumevani header
        tabBarIcon: ({ focused }) => {
          let iconPath = focused;

          //Odredi putanju ikone na osnovu ruta
          if (route.name === "Home") {
            iconPath = focused
              ? require("../assets/icons/home-active.png")
              : require("../assets/icons/home.png");
          } else if (route.name === "My Recipes") {
            iconPath = focused
              ? require("../assets/icons/chef-active.png")
              : require("../assets/icons/chef.png");
          } else if (route.name === "Add Recipe") {
            iconPath = require("../assets/icons/plus.png");
          } else if (route.name === "Favorites") {
            iconPath = focused
              ? require("../assets/icons/favourite-active.png")
              : require("../assets/icons/favourite.png");
          } else if (route.name === "Shopping List") {
            iconPath = focused
              ? require("../assets/icons/bag-active.png")
              : require("../assets/icons/bag.png");
          }
          return <Image source={iconPath} style={{ width: 24, height: 24 }} />;
        },

        // Stil za labelu taba
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarStyle: {
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Blaga transparentnost
          borderTopWidth: 0, // Uklanja liniju na vrhu taba
          shadowColor: "rgba(0, 0, 0, 0.1)", // Blagi shadow efekat
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarActiveTintColor: "#D63724",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Recipes" component={MyRecipesScreen} />
      <Tab.Screen name="Add Recipe" component={AddRecipeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Shopping List" component={ShoppingListScreen} />
    </Tab.Navigator>
  );
}
