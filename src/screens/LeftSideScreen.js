import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const LeftSideScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.avatar}>
        <Icon name="user" type="feather" size={100} />
      </View>
      <Text style={styles.text}>Avatar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 200,
    height: 200,
    backgroundColor: 'lightgray',
    borderRadius: 100,
    marginBottom: 30,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LeftSideScreen;
