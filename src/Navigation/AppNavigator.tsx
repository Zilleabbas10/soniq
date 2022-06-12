import React, {useEffect, useRef, useState} from 'react';
import {View, AppState as AppActiveBackgroundState} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNetInfo} from '@react-native-community/netinfo';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';

import data from '../Mock/data.json';
import {useAppContext} from '../Contexts/AppContext';
import {APP_STATE} from '../enums';
import {NetworkIndication} from '../Components';
import {AsyncStorageService} from '../Services';
import AppConstants from '../Constants/AppConstants';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [aState, setAppState] = useState(AppActiveBackgroundState.currentState);
  const {AppDispatcher, AppState} = useAppContext();
  const {isNetworkAvailable} = AppState;
  const {isConnected} = useNetInfo();

  const getDataFromAsyncStorage = async () => {
    const asyncData = await AsyncStorageService.getAsyncStorageItem(
      AppConstants.ASYNC_STORAGE_DATA,
    );
    if (asyncData) {
      AppDispatcher({
        type: APP_STATE.UPDATE_APP_CONTEXT,
        payload: JSON.parse(asyncData),
      });
      return;
    }
    AppDispatcher({
      type: APP_STATE.UPDATE_APP_CONTEXT,
      payload: {images: data},
    });
  };

  const saveDataToAsyncStorage = async () => {
    await AsyncStorageService.saveToAsyncStorage(
      AppConstants.ASYNC_STORAGE_DATA,
      JSON.stringify(AppState),
    );
  };

  useEffect(() => {
    AppDispatcher({
      type: APP_STATE.UPDATE_APP_CONTEXT,
      payload: {isNetworkAvailable: isConnected},
    });
    if (isConnected === false) saveDataToAsyncStorage();
  }, [isConnected]);

  useEffect(() => {
    if (aState === 'background' || aState === 'inactive') {
      AsyncStorageService.removeKeyFromAsyncStorage(
        AppConstants.ASYNC_STORAGE_DATA,
      );
      saveDataToAsyncStorage();
    }
  }, [aState]);

  useEffect(() => {
    getDataFromAsyncStorage();

    const subscription = AppActiveBackgroundState.addEventListener(
      'change',
      nextAppState => {
        setAppState(nextAppState);
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      {!isNetworkAvailable && <NetworkIndication />}
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
    </View>
  );
};

export default AppNavigation;
