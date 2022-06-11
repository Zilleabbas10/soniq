import React from 'react';
import {FlatList} from 'react-native';

import {
  EmptyListBlankSlate,
  GalleryImage,
  InputWithButton,
  ScreenContainer,
} from '../Components';

import {ImageType} from '../types';
import data from '../Mock/data.json';

const HomeScreen = () => {
  return (
    <ScreenContainer>
      <>
        <InputWithButton />
        <FlatList
          data={data as ImageType[]}
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
