import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransactionScreens from "./screens/BookTransactionScreens"
import SearchScreens from "./screens/SearchScreens"
import {createAppContainer}from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"
export default function App() {
  return (
   <AppContainer/>
  );
}
 const TabNavigator=createBottomTabNavigator({
   Transaction:{screen:BookTransactionScreens},
   Search:{screen:SearchScreens}
 })
 const AppContainer=createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
