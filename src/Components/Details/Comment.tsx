import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useAppContext} from '../../Contexts/AppContext';
import {Colors, Metrics} from '../../Themes';
import {CommentType} from '../../types';
import {
  deleteConfirmationAlert,
  editComment,
  removeComment,
  updateAppContext,
  userConfirmationAlert,
} from '../../Utils';
import DialogInputComponent from '../DialogInput';

type CommentComponentType = {
  comment: CommentType;
  imageTitle: string;
  imageId: string;
};
const Comment = ({comment, imageTitle, imageId}: CommentComponentType) => {
  const {AppState, AppDispatcher} = useAppContext();
  const {images, activeUserId} = AppState;
  const {body, id, userId} = comment;
  const [isDialogVisible, setDialogVisible] = useState<boolean>(false);

  const canUserPerformAction = activeUserId === userId;

  const deleteComment = () => {
    const updatedImages = removeComment({
      imageId,
      commentId: id,
      images,
    });
    updateAppContext({AppDispatcher, data: updatedImages});
  };

  const editImageComment = (comment: string) => {
    const updatedImages = editComment({
      imageId,
      commentId: id,
      images,
      comment,
    });
    updateAppContext({AppDispatcher, data: updatedImages});
    setDialogVisible(false);
  };
  return (
    <View style={styles.commmentContainer}>
      <View style={styles.commentTextContainer}>
        <Text style={{textTransform: 'capitalize'}}>{body}</Text>
      </View>
      <View style={styles.commentButtonContainer}>
        <TouchableOpacity
          onPress={() =>
            canUserPerformAction
              ? setDialogVisible(true)
              : userConfirmationAlert({})
          }
          style={styles.buttonContainer}>
          <MaterialIcons name="edit" size={15} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            canUserPerformAction
              ? deleteConfirmationAlert({title: imageTitle, deleteComment})
              : userConfirmationAlert({})
          }
          style={styles.buttonContainer}>
          <FontAwesomeIcon name="trash" size={15} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <DialogInputComponent
        isDialogVisible={isDialogVisible}
        inputValue={body}
        submitInputValue={comment => editImageComment(comment)}
        closeDialog={() => setDialogVisible(false)}
      />
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  commmentContainer: {
    flexDirection: 'row',
    width: '100%',
    borderColor: Colors.inputBgColor,
    borderWidth: 1,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.baseMargin,
    marginVertical: Metrics.smallMargin,
    borderRadius: Metrics.smallMargin,
  },
  commentTextContainer: {
    width: '80%',
    justifyContent: 'center',
  },
  commentButtonContainer: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 25,
    width: 25,
    backgroundColor: Colors.blackTransparentColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.smallMargin,
  },
});
