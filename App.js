import React from 'react';
import {registerScreens} from './src/screens';
import {Navigation} from 'react-native-navigation';
import Feather from 'react-native-vector-icons/Feather';

export function start() {
  registerScreens();

  Navigation.events().registerAppLaunchedListener(() => {
    Promise.all([Feather.getImageSource('menu', 25)]).then(([menuIcon]) => {
      Navigation.setRoot({
        root: {
          sideMenu: {
            id: 'sideMenu',
            left: {
              component: {
                name: 'LeftSide',
                id: 'leftSide',
              },
            },
            center: {
              stack: {
                id: 'app',
                children: [
                  {
                    component: {
                      name: 'Home',
                      id: 'app.Home',
                      options: {
                        topBar: {
                          title: {
                            text: 'Home',
                          },
                          leftButtons: [
                            {
                              id: 'toggleMenu',
                              icon: menuIcon,
                            },
                          ],
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      });
    });
  });
}
