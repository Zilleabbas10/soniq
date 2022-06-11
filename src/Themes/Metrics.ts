import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  screenHorizontalPadding: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width,
  screenHeight: height,
  navBarHeight: Platform.OS === 'ios' ? 64 : 50,
  buttonRadius: 4,
};

export default metrics;
