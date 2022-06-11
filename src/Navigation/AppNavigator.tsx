import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';

import data from '../Mock/data.json';
import {useAppContext} from '../Contexts/AppContext';
import {APP_STATE} from '../enums';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const {AppDispatcher} = useAppContext();

  useEffect(() => {
    AppDispatcher({
      type: APP_STATE.UPDATE_APP_CONTEXT,
      payload: {images: data},
    });
  }, []);
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
};

export default AppNavigation;
