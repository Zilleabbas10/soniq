import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationService} from '../Services';

import {Colors, Metrics} from '../Themes';
import {ImageType} from '../types';

type GalleryImageType = {
  item: ImageType;
};
const GalleryImage = React.memo(({item}: GalleryImageType) => {
  const {id, title, imageUrl} = item;
  const [isLoaded, setImageLoaded] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigate('Details', {imageId: id})}
      key={id}
      style={styles.imageContainer}>
      {!isLoaded && (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="small"
          color={Colors.primary}
        />
      )}
      <Image
        style={styles.image}
        accessibilityLabel={title}
        resizeMode="stretch"
        source={{
          uri: imageUrl,
        }}
        onLoad={() => setImageLoaded(true)}
      />
    </TouchableOpacity>
  );
});

export default GalleryImage;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Metrics.screenWidth / 3.5,
    height: Metrics.screenWidth / 3.5,
    marginVertical: Metrics.smallMargin - 2,
    marginHorizontal: Metrics.smallMargin - 2,
    borderRadius: Metrics.smallMargin,
    overlayColor: Colors.white,
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 2,
  },
});
