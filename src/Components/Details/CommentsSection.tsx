import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Metrics} from '../../Themes';

const CommentsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: '700'}}>Comments</Text>
    </View>
  );
};

export default CommentsSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.screenHorizontalPadding,
    paddingVertical: Metrics.screenHorizontalPadding,
  },
});
