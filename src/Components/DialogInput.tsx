// @ts-nocheck
import React from 'react';
import {StyleSheet} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import {Colors} from '../Themes';

type DialogInputType = {
  isDialogVisible: boolean;
  inputValue: string;
  submitInputValue(val: string): void;
  closeDialog(): void;
};
const DialogInputComponent = ({
  isDialogVisible = false,
  inputValue = '',
  submitInputValue = () => {},
  closeDialog = () => {},
}: DialogInputType) => {
  return (
    <DialogInput
      isDialogVisible={isDialogVisible}
      modalStyle={{
        backgroundColor: 'transparent',
      }}
      dialogStyle={styles.dialogContainer}
      title={'Edit Comment'}
      initValueTextInput={inputValue}
      hintInput={'Edit Comment'}
      submitInput={submitInputValue}
      closeDialog={closeDialog}
    />
  );
};

export default DialogInputComponent;

const styles = StyleSheet.create({
  dialogContainer: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.inputBgColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
