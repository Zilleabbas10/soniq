import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Metrics} from '../Themes';

type ScreenContainerProps = {
  children: React.ReactElement;
};
const ScreenContainer = ({children}: ScreenContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.screenHorizontalPadding,
    flex: 1,
    backgroundColor: Colors.white,
  },
});
