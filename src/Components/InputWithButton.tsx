import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Input from './Input';

import {Colors, Metrics} from '../Themes';

const InputWithButton = () => {
  const [state, setState] = useState<{
    inputUserId: string;
  }>({
    inputUserId: '',
  });
  const {inputUserId} = state;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={text => setState({...state, inputUserId: text})}
            value={inputUserId}
            placeholder={`Set Active User ID`}
            placeholderTextColor={Colors.secondaryText}
            selectionColor={Colors.secondaryText}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style={{color: Colors.white}}>Set user ID</Text>
        </View>
      </View>
    </>
  );
};

export default InputWithButton;

const styles = StyleSheet.create({
  container: {
    marginBottom: Metrics.section,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: Metrics.smallMargin,
  },
  inputContainer: {
    width: '65%',
    justifyContent: 'center',
    backgroundColor: Colors.inputBgColor,
    borderRadius: Metrics.smallMargin,
  },
});
