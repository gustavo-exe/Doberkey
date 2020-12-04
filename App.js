import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import FormScreen from './src/screens/FormScreen';
import ViewScreen from './src/screens/ViewScreen';
import * as SplashScreen from "expo-splash-screen";
import useDataBase from "./src/hooks/useDatabase";
//import { StatusBar } from "react-native";
import {PasswordContextProvider} from "./src/context/PasswordContext";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
//import {StatusBar} from "react-native";

const Stack = createStackNavigator();

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const isLoadingComplete = useDataBase();

  //Ocultar la pantalla de splash
  if (isLoadingComplete) SplashScreen.hideAsync();

  //<StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#5E5C00" translucent = {true} />
  return (

  <View style={{ flex: 1 }}>
    
    <PasswordContextProvider>

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

        <Stack.Screen 
          options={{
            title: 'Formulario',
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
        name="DoberkeyFormScreen" component={FormScreen}/>

        <Stack.Screen 
          options={{
            title: 'Vista',
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
        name="DoberkeyViewScreen" component={ViewScreen}/>
    
        </Stack.Navigator>
      </NavigationContainer>
    </PasswordContextProvider>
  </View>

    
  );
}

