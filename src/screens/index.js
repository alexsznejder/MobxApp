import React from 'react';
import {Navigation} from 'react-native-navigation';
import MainScreen from './MainScreen';
import SecondScreen from './SecondScreen';
import LeftSideScreen from './LeftSideScreen';
import TabsScreen from './TabsScreen';

export const registerScreens = () => {
  Navigation.registerComponent(`Home`, () => MainScreen);
  Navigation.registerComponent('Second', () => SecondScreen);
  Navigation.registerComponent('LeftSide', () => LeftSideScreen);
  Navigation.registerComponent('Tabs', () => TabsScreen);
};
