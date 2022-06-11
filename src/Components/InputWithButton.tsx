import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Input from './Input';

import {Colors, Metrics} from '../Themes';

type InputWithButtonType = {
  inputValue: string;
  setInputValue(val: string): void;
  placeholderText?: string;
  btnLabel?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
};
const InputWithButton = ({
  inputValue = '',
  setInputValue = () => {},
  placeholderText = 'Set Active User ID',
  btnLabel = 'Set user ID',
  keyboardType = 'default',
}: InputWithButtonType) => {
  const backgroundColor =
    inputValue.length > 0 ? Colors.primary : Colors.primaryDisabled;
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          onChangeText={setInputValue}
          value={inputValue}
          placeholder={placeholderText}
          placeholderTextColor={Colors.secondaryText}
          selectionColor={Colors.secondaryText}
          keyboardType={keyboardType}
        />
      </View>
      <View style={[styles.buttonContainer, {backgroundColor}]}>
        <Text style={{color: Colors.white}}>{btnLabel}</Text>
      </View>
    </View>
  );
};

export default InputWithButton;

const styles = StyleSheet.create({
  container: {
    marginBottom: Metrics.doubleBaseMargin,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.smallMargin,
  },
  inputContainer: {
    width: '65%',
    justifyContent: 'center',
    backgroundColor: Colors.inputBgColor,
    borderRadius: Metrics.smallMargin,
  },
});
