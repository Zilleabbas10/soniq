import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Fonts, Metrics} from '../Themes';

type InputType = {
  value: string;
  onChangeText(value: any): void;
  onFocus?(): void;
  onBlur?(): void;
  placeholderTextColor: string;
  selectionColor: string;
  placeholder: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
};
const Input = (props: InputType) => {
  return <TextInput style={styles.input} {...props} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingLeft: Metrics.baseMargin,
    fontSize: Fonts.size.small,
  },
});
