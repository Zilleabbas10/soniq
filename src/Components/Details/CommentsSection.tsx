import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors, Fonts, Metrics} from '../../Themes';
import {CommentType} from '../../types';

type CommentComponentType = {
  comment: CommentType;
};
const Comment = ({comment}: CommentComponentType) => {
  const {body} = comment;
  return (
    <View style={styles.commmentContainer}>
      <View style={styles.commentTextContainer}>
        <Text>{body}</Text>
      </View>
      <View style={styles.commentButtonContainer}>
        <View style={styles.buttonContainer}>
          <MaterialIcons name="edit" size={15} color={Colors.white} />
        </View>
        <View style={styles.buttonContainer}>
          <FontAwesomeIcon name="trash" size={15} color={Colors.white} />
        </View>
      </View>
    </View>
  );
};

type CommentsSectionType = {
  comments: CommentType[];
  imageId: string;
};
const CommentsSection = ({comments, imageId}: CommentsSectionType) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: '700', fontSize: Fonts.size.h4}}>Comments</Text>
      <View style={{height: Metrics.screenWidth}}>
        <FlatList
          contentContainerStyle={{
            paddingTop: Metrics.baseMargin,
          }}
          showsVerticalScrollIndicator={false}
          data={comments}
          renderItem={({item}) => <Comment comment={item} />}
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
  commmentContainer: {
    flexDirection: 'row',
    width: '100%',
    borderColor: Colors.inputBgColor,
    borderWidth: 1,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.baseMargin,
    marginVertical: Metrics.smallMargin,
    borderRadius: Metrics.smallMargin,
  },
  commentTextContainer: {
    width: '80%',
    justifyContent: 'center',
  },
  commentButtonContainer: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 25,
    width: 25,
    backgroundColor: Colors.blackTransparentColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.smallMargin,
  },
});
