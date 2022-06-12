import {Alert} from 'react-native';
import {APP_STATE} from '../enums';
import {ImageType} from '../types';

type deleteConfirmationAlertType = {
  title: string;
  deleteComment(): void;
};
export const deleteConfirmationAlert = ({
  title,
  deleteComment,
}: deleteConfirmationAlertType) =>
  Alert.alert(`${title}`, `Are you sure you want to delete this comment?`, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'Delete',
      onPress: deleteComment,
    },
  ]);

type userConfirmationAlertType = {
  title?: string;
  subTitle?: string;
};
export const userConfirmationAlert = ({
  title = 'Action Denied',
  subTitle = `You have no permission to edit or delete this comment as it belongs to other user. If you want to edit or delete this comment please set user ID from hoome screen to perform this action`,
}: userConfirmationAlertType) =>
  Alert.alert(`${title}`, `${subTitle}`, [
    {
      text: 'Ok',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
  ]);

type getImageAndCommentIndexes = {
  imageId: string;
  commentId: string;
  images: ImageType[];
};
const getImageAndCommentIndexes = ({
  imageId,
  commentId,
  images,
}: getImageAndCommentIndexes) => {
  const formattedImages = [...images];
  const imageIndex = formattedImages.findIndex(item => item.id === imageId);
  const commentIndex = formattedImages[imageIndex].comments.findIndex(
    item => item.id === commentId,
  );
  return {imageIndex, commentIndex};
};

type removeCommentType = {
  imageId: string;
  commentId: string;
  images: ImageType[];
};
export const removeComment = ({
  imageId,
  commentId,
  images,
}: removeCommentType) => {
  const formattedImages = [...images];
  const indexes = getImageAndCommentIndexes({
    imageId,
    commentId,
    images: formattedImages,
  });
  const {imageIndex, commentIndex} = indexes;
  formattedImages[imageIndex].comments.splice(commentIndex, 1);
  return formattedImages;
};

type editCommentType = {
  imageId: string;
  commentId: string;
  images: ImageType[];
  comment: string;
};
export const editComment = ({
  imageId,
  commentId,
  images,
  comment,
}: editCommentType) => {
  const formattedImages = [...images];
  const indexes = getImageAndCommentIndexes({
    imageId,
    commentId,
    images: formattedImages,
  });
  const {imageIndex, commentIndex} = indexes;
  formattedImages[imageIndex].comments[commentIndex].body = comment;

  return formattedImages;
};

type addCommentType = {
  imageId: string;
  images: ImageType[];
  comment: string;
  userId: string;
};
export const addComment = ({
  imageId,
  images,
  comment,
  userId = '',
}: addCommentType) => {
  const formattedImages = [...images];
  const imageIndex = formattedImages.findIndex(item => item.id === imageId);
  formattedImages[imageIndex].comments.push({
    id: generateUUID(),
    body: comment,
    userId,
  });
  return formattedImages;
};

type updateAppContextType = {
  AppDispatcher: React.Dispatch<React.SetStateAction<any>>;
  data: object;
};
export const updateAppContext = ({
  AppDispatcher,
  data,
}: updateAppContextType) => {
  AppDispatcher({
    type: APP_STATE.UPDATE_APP_CONTEXT,
    payload: data,
  });
};

type getDataByImageIdType = {
  imageId: string;
  images: ImageType[];
};
export const getDataByImageId = ({
  imageId,
  images,
}: getDataByImageIdType): ImageType | undefined => {
  const formattedImages = [...images];
  const image = formattedImages.find(item => item.id === imageId);
  return image;
};

/**
 *  uuid generator
 *
 * @returns
 */
export function generateUUID() {
  const oldStr = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  return `${Date.now()}-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
