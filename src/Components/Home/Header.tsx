import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppContext} from '../../Contexts/AppContext';
import {Metrics} from '../../Themes';
import {updateAppContext} from '../../Utils';
import InputWithButton from '../InputWithButton';

const Header = () => {
  const {AppState, AppDispatcher} = useAppContext();
  const {activeUserId} = AppState;
  const [userId, setUserId] = useState('');
  const placeholderText =
    activeUserId !== ''
      ? `User with '${activeUserId}' ID is active`
      : 'Set Active User ID';

  const updateActiveUserIdInContext = useCallback(() => {
    updateAppContext({AppDispatcher, data: {activeUserId: userId}});
    setUserId('');
  }, [userId]);

  return (
    <View style={styles.container}>
      <InputWithButton
        keyboardType="numeric"
        inputValue={userId}
        placeholderText={placeholderText}
        setInputValue={id => setUserId(id)}
        onBtnPress={updateActiveUserIdInContext}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: Metrics.doubleBaseMargin,
  },
});
