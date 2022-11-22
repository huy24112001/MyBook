/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchBookScreen, ListBookScreen, BookDetailScreen } from "./src/screens";


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function MainScreen() {
  return <BottomTab.Navigator>
    <BottomTab.Screen name="MyBook" component={ListBookScreen} options={{ title: "My Book" }} />
    <BottomTab.Screen name="SearchBook" component={SearchBookScreen} options={{ title: "Search Book", tabBarLabel: 'Search' }} />
  </BottomTab.Navigator>


}

function App() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" options={{ headerShown: false }} component={MainScreen} />
      <Stack.Screen name="BookDetail" component={BookDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>

};

const styles = StyleSheet.create({
});

export default App;
