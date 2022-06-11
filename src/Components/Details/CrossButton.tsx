import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AppConstants from '../../Constants/AppConstants';
import {NavigationService} from '../../Services';
import {Colors, Metrics} from '../../Themes';

const CrossButton = () => {
  return (
    <TouchableOpacity
      onPress={() => NavigationService.goBackToPreviousScreen()}
      style={styles.container}>
      <Icon name="cross" size={25} color={Colors.white} />
    </TouchableOpacity>
  );
};

export default CrossButton;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: Colors.blackTransparentColor,
    zIndex: 1,
    top: AppConstants.IS_ANDROID ? Metrics.section : Metrics.section * 2,
    right: 10,
    position: 'absolute',
  },
});
