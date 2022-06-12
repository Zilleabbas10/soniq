import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Metrics} from '../Themes';

const NetworkIndication = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Netwrok Available</Text>
    </View>
  );
};

export default NetworkIndication;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Metrics.section,
    backgroundColor: Colors.blackTransparentColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: Colors.white},
});
