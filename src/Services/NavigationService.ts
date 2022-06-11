import {CommonActions} from '@react-navigation/native';

let navigator: any;

const setTopLevelNavigator = (navigatorRef: any) => {
  navigator = navigatorRef.current;
};

const navigate = (name: string, params?: object) =>
  navigator.dispatch(CommonActions.navigate(name, params || {}));

const goBackToPreviousScreen = () => navigator.dispatch(CommonActions.goBack());

// add other navigation functions that you need and export them
export default {
  setTopLevelNavigator,
  navigate,
  goBackToPreviousScreen,
};
