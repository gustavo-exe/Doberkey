import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import FormScreen from './src/screens/FormScreen';
import ViewScreen from './src/screens/ViewScreen';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
//import {StatusBar} from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  
      <Stack.Navigator initialRouteName= "DoberkeyHomeScreen">
      <Stack.Screen 
        options={{
          title: 'Dashboard',
          headerStyle: 
        {
          elevation:0,
          backgroundColor: '#5E5C00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: 
        {
          textAlign:'right',
          fontWeight: 'bold',
        },
      }}
      name="DoberkeyHomeScreen" component={HomeScreen}/>

      

   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

