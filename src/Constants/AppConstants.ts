import {Platform} from 'react-native';

export default {
  IS_ANDROID: Boolean(Platform.OS === 'android'),
  ASYNC_STORAGE_DATA: 'async-storage-data',
};
