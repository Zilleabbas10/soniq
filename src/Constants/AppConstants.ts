import {Platform} from 'react-native';

export default {
  IS_ANDROID: Boolean(Platform.OS === 'android'),
};
