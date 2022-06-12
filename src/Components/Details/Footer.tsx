import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppConstants from '../../Constants/AppConstants';
import {useAppContext} from '../../Contexts/AppContext';
import {Colors, Metrics} from '../../Themes';
import {addComment, updateAppContext, userConfirmationAlert} from '../../Utils';
import InputWithButton from '../InputWithButton';

type FooterType = {
  imageId: string;
};
const Footer = ({imageId}: FooterType) => {
  const {AppState, AppDispatcher} = useAppContext();
  const {images, activeUserId} = AppState;
  const [comment, setComment] = useState<string>('');

  const addImageComment = useCallback(() => {
    if (activeUserId === '') {
      userConfirmationAlert({
        subTitle: `You can't do this action. Please set user ID first from home screen to add comment`,
      });
      return;
    }
    const updatedImages = addComment({
      imageId,
      images,
      comment,
      userId: activeUserId,
    });
    updateAppContext({AppDispatcher, data: updatedImages});
    setComment('');
  }, [activeUserId, comment]);

  return (
    <View style={styles.container}>
      <InputWithButton
        placeholderText="Enter Comment"
        btnLabel="Add Comment"
        inputValue={comment}
        setInputValue={comment => setComment(comment)}
        onBtnPress={() => addImageComment()}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: AppConstants.IS_ANDROID ? 70 : Metrics.screenHorizontalPadding * 4,
    position: 'absolute',
    bottom: 0,
    borderTopColor: Colors.inputBgColor,
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.white,
    paddingTop: AppConstants.IS_ANDROID
      ? Metrics.doubleBaseMargin
      : Metrics.smallMargin,
  },
});
