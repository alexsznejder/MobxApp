import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';

const TabsScreen = props => {
  return (
    <ScrollableTabView
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}>
      <FirstTabScreen tabLabel="first" />

      <SecondTabScreen tabLabel="second" />
    </ScrollableTabView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabsScreen;
