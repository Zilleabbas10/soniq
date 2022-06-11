import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../../Contexts/AppContext';
import {Fonts, Metrics} from '../../Themes';
import {CommentType} from '../../types';
import Comment from './Comment';

type CommentsSectionType = {
  comments: CommentType[];
  imageId: string;
  title: string;
};
const CommentsSection = ({comments, imageId, title}: CommentsSectionType) => {
  const {AppState} = useAppContext();
  const {activeUserId} = AppState;
  const activeUserIdExist = activeUserId !== '';
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.sectionHeading}>Comments</Text>
        {activeUserIdExist && (
          <Text style={styles.sectionHeading}>
            Active User ID: {activeUserId}
          </Text>
        )}
        {!activeUserIdExist && (
          <Text style={styles.sectionHeading}>No Active User Loggedin</Text>
        )}
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={comments}
          renderItem={({item}) => (
            <Comment comment={item} imageTitle={title} imageId={imageId} />
          )}
        />
      </View>
    </View>
  );
};

export default CommentsSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.screenHorizontalPadding,
    paddingTop: Metrics.screenHorizontalPadding,
  },
  sectionHeading: {
    fontWeight: '700',
    fontSize: Fonts.size.h4,
  },
  flatListContainer: {
    height: Metrics.screenWidth,
    paddingTop: Metrics.baseMargin,
  },
});
