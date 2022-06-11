import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CommentsSection, HeaderAndCoverImage} from '../Components';
import {NavigationService} from '../Services';
import {Colors, Fonts, Metrics} from '../Themes';
import {ImageType} from '../types';

type DetailScreenType = {
  route: {
    params: ImageType;
  };
};
const DetailScreen = ({route}: DetailScreenType) => {
  const {title, imageUrl} = route.params;
  return (
    <View style={styles.container}>
      <HeaderAndCoverImage title={title} uri={imageUrl} />
      <CommentsSection />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: Metrics.screenHeight / 2.5,
  },
  titleText: {
    paddingVertical: Metrics.doubleBaseMargin,
    textTransform: 'capitalize',
    fontSize: Fonts.size.h4,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: Metrics.doubleBaseMargin,
  },
});
