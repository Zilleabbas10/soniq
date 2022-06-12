import * as React from 'react';
import {APP_STATE} from '../enums';
import {AppStateType} from '../types';

const defaultAppState: AppStateType = {
  images: [],
  apiLoader: false,
  activeUserId: '',
  isNetworkAvailable: false,
};

const reducer = (state: AppStateType, action: any) => {
  switch (action.type) {
    case APP_STATE.UPDATE_APP_CONTEXT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

interface ContextProviderType {
  AppState: AppStateType;
  AppDispatcher: React.Dispatch<React.SetStateAction<any>>;
}
// React Context for the APP
const AppContext = React.createContext<ContextProviderType>({
  AppState: defaultAppState,
  AppDispatcher: () => {},
});

// React Hook to access AppContext
const useAppContext = () => React.useContext(AppContext);

// React context provider for the APP
// this will contain the overall shared state for the APP
type AppContextProviderProps = {
  children: React.ReactElement;
};
const AppContextProvider = (props: AppContextProviderProps) => {
  const {children} = props;
  const [AppState, AppDispatcher] = React.useReducer(reducer, defaultAppState);

  const value = React.useMemo(
    () => ({
      AppState,
      AppDispatcher,
    }),
    [AppState],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export {useAppContext, AppContextProvider};
