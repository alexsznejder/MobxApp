import React, {useState, useEffect} from 'react';
import {Navigation} from 'react-native-navigation';
import {Button} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import MainScreenModal from '../components/MainScreenModal';

const MainScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);

  options = {
    topBar: {
      title: {
        text: 'Back',
      },
    },
  };

  useEffect(() => {
    Navigation.events().registerNavigationButtonPressedListener(
      ({buttonId}) => {
        Navigation.mergeOptions('leftSide', {
          sideMenu: {
            left: {
              visible: true,
            },
          },
        });
      },
    );
  }, []);

  return (
    <View style={styles.screen}>
      <Button
        containerStyle={styles.button}
        title="Go to second screen"
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'Second',
              options: options,
            },
          });
        }}
      />
      <Button
        containerStyle={styles.button}
        title="Open modal"
        onPress={() => setModalVisible(true)}
      />
      <Button
        containerStyle={styles.button}
        title="Go to tabs screen"
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'Tabs',
              options: options,
            },
          });
        }}
      />
      <MainScreenModal
        modalVisible={modalVisible}
        setVisible={visible => setModalVisible(visible)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 20,
    width: 200,
  },
});

export default MainScreen;
