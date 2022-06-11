import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CommentsSection, Footer, HeaderAndCoverImage} from '../Components';
import {useAppContext} from '../Contexts/AppContext';
import {Colors, Fonts, Metrics} from '../Themes';
import {ImageType} from '../types';
import {getDataByImageId} from '../Utils';

type DetailScreenType = {
  route: {
    params: {imageId: string};
  };
};
const DetailScreen = ({route}: DetailScreenType) => {
  const {AppState} = useAppContext();
  const {images} = AppState;
  const {imageId} = route.params;
  const image = getDataByImageId({imageId, images}) as ImageType;
  const {title, imageUrl, comments, id} = image;

  return (
    <View style={styles.container}>
      <HeaderAndCoverImage title={title} uri={imageUrl} />
      <CommentsSection comments={comments} imageId={id} title={title} />
      <Footer imageId={imageId} />
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
