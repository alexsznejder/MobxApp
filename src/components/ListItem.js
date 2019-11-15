import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ListItem = props => {
  return (
    <View style={styles.row}>
      <View style={styles.image}>
        <Image style={styles.image} source={{uri: props.imageUrl}} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    // width: '100%',
    // flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flexGrow: 1,
    flexShrink: 1,
    // flex: 1,
    marginHorizontal: 10,
    // backgroundColor: 'blue',
  },
  text: {
    // flexShrink: 1,
    flex: 1,
    // display: 'flex',
    fontSize: 20,
    // flexShrink: 1,
    flexWrap: 'wrap',
  },
});

export default ListItem;
