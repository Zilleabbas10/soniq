import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, Metrics} from '../../Themes';
import CrossButton from './CrossButton';

type HeaderAndCoverImageType = {
  title: string;
  uri: string;
};
const HeaderAndCoverImage = ({
  title = '',
  uri = '',
}: HeaderAndCoverImageType) => {
  return (
    <View>
      <CrossButton />
      <Image
        style={styles.image}
        accessibilityLabel={title}
        resizeMode="cover"
        source={{
          uri,
        }}
      />
      <View style={styles.imageTitleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderAndCoverImage;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: Metrics.screenHeight / 2.5,
  },
  imageTitleContainer: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blackTransparentColor,
    zIndex: 1,
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: Metrics.screenHorizontalPadding,
  },
  titleText: {
    textTransform: 'capitalize',
    fontSize: Fonts.size.h4,
    fontWeight: '400',
    color: Colors.white,
  },
});
