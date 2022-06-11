import React from 'react';
import {FlatList} from 'react-native';

import {useAppContext} from '../Contexts/AppContext';

import {
  EmptyListBlankSlate,
  GalleryImage,
  ScreenContainer,
} from '../Components';
import Header from '../Components/Home/Header';

const HomeScreen = () => {
  const {AppState} = useAppContext();
  const {images} = AppState;
  return (
    <ScreenContainer>
      <>
        <Header />
        <FlatList
          data={images}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          initialNumToRender={10}
          removeClippedSubviews
          renderItem={({item}) => <GalleryImage key={item.id} item={item} />}
          ListEmptyComponent={<EmptyListBlankSlate />}
          keyExtractor={item => item.id.toString()}
        />
      </>
    </ScreenContainer>
  );
};

export default HomeScreen;
