import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppConstants from '../../Constants/AppConstants';
import {Colors, Metrics} from '../../Themes';
import InputWithButton from '../InputWithButton';

const Footer = () => {
  const [state, setState] = useState<{
    comment: string;
  }>({
    comment: '',
  });
  const {comment} = state;
  return (
    <View style={styles.container}>
      <InputWithButton
        placeholderText="Enter Comment"
        btnLabel="Add Comment"
        inputValue={comment}
        setInputValue={comment => setState({...state, comment})}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 0,
    borderTopColor: Colors.inputBgColor,
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.white,
    paddingTop: AppConstants.IS_ANDROID
      ? Metrics.section
      : Metrics.doubleBaseMargin - Metrics.smallMargin,
  },
});
