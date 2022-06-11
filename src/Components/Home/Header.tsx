import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Metrics} from '../../Themes';
import InputWithButton from '../InputWithButton';

const Header = () => {
  const [state, setState] = useState<{
    userId: string;
  }>({
    userId: '',
  });
  const {userId} = state;
  return (
    <View style={styles.container}>
      <InputWithButton
        keyboardType="numeric"
        inputValue={userId}
        setInputValue={id => setState({...state, userId: id})}
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
