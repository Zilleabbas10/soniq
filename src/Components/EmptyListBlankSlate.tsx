import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../Contexts/AppContext';
import {Colors, Fonts, Metrics} from '../Themes';

const EmptyListBlankSlate = () => {
  const {AppState} = useAppContext();
  const {apiLoader} = AppState;
  return (
    <View style={styles.emptyBlankListContainer}>
      {apiLoader && <ActivityIndicator size="small" color={Colors.primary} />}
      {!apiLoader && (
        <Text style={styles.emptyListText}>No results found...</Text>
      )}
    </View>
  );
};

export default EmptyListBlankSlate;

const styles = StyleSheet.create({
  emptyBlankListContainer: {
    height: Metrics.screenWidth,
    width: Metrics.screenWidth - Metrics.screenHorizontalPadding * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    color: Colors.primaryText,
    fontSize: Fonts.size.small,
    fontWeight: '700',
  },
});
