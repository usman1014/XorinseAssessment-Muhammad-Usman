import { View, Text, Image, StatusBar, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';
import ForgotPassword from './Screens/ForgotPassword';
import Verification from './Screens/VerifcationScreen';
import CreatePasword from './Screens/CreatePassword';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgetPassword" component={ForgotPassword} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="CreatePasword" component={CreatePasword} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}