/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {createContext, type PropsWithChildren, useContext} from 'react';
import {
  StyleSheet,
} from 'react-native';


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListBookScreen, BookDetailScreen } from "./src/screens";
import FavoriteBookScreen from "./src/screens/FavoriteBookScreen";
import Icon from "react-native-vector-icons/Entypo";
import FavoritesContextProvider, {FavoritesContext} from "./src/contexts/FavoriteContext";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


function MainScreen() {
<<<<<<< HEAD
  return <BottomTab.Navigator>
    <BottomTab.Screen name="MyBook" component={ListBookScreen} options={{
      title: "My Book",
=======

  return <BottomTab.Navigator >
    <BottomTab.Screen name="MyBook" component={ListBookScreen} options={{ title: "My Book" ,
>>>>>>> c7548b9fcd138673e6975d661b98bfc469621f86
      tabBarIcon: ({ color, size }) => (
        <Icon name="book" size={size}  />
      ),
      headerTitleStyle : {
       marginLeft:170,
        fontWeight:'bold',
      }
    }} />
    <BottomTab.Screen name="FavoriteBook" component={FavoriteBookScreen} options={{
      title: "Favorite Book",
      tabBarLabel: 'Favorite',
<<<<<<< HEAD
      tabBarIcon: ({ color, size }) => (
        <Icon name="heart" size={size} color={color} />
      ),
=======
     /* tabBarIcon: ({ color, size }) => (
          <Icon name="heart" size={size} color={color} />
      ),*/
      headerTitleStyle : {
        marginLeft:170,
        fontWeight:'bold',
      }
>>>>>>> c7548b9fcd138673e6975d661b98bfc469621f86
    }} />
  </BottomTab.Navigator>

}

function App() {

  return <FavoritesContextProvider>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" options={{ headerShown: false }} component={MainScreen} />
      <Stack.Screen name="BookDetail" component={BookDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  </FavoritesContextProvider>

};

const styles = StyleSheet.create({
});

export default App;
