import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';

const Stack = createNativeStackNavigator();
function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{
          title: '',
          presentation: 'fullScreenModal',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;
