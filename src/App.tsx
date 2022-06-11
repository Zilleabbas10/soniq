import * as React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigation from './Navigation/AppNavigator';
import NavigationService from './Services/NavigationService';
import {Colors} from './Themes';
import {AppContextProvider} from './Contexts/AppContext';

export type StackActionsParamList = {
  name?: unknown | string;
  params?: unknown | object | undefined;
};

const App = () => {
  const navigationRef = React.useRef(
    useNavigationContainerRef<StackActionsParamList>(),
  );
  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => NavigationService.setTopLevelNavigator(navigationRef)}>
        <StatusBar />
        <SafeAreaView style={styles.safeAreaView}>
          <AppContextProvider>
            <AppNavigation />
          </AppContextProvider>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
