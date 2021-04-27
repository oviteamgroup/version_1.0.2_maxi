import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '@screens/ProfileScreen'
import PrincipalScreen from '@screens/PrincipalScreen'
import LoginScreen from '@screens/LoginScreen'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Principal" component={PrincipalScreen} />  
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
         
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
