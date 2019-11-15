import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';

const SecondScreen = props => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.screen}>
      <Text style={styles.number}>{number}</Text>
      <Button
        icon={<Entypo name="plus" size={25} color="#fff" />}
        onPress={() => setNumber(number + 1)}
        containerStyle={styles.buttonContainer}
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
  buttonContainer: {
    marginTop: 60,
    width: 60,
  },
  number: {
    fontSize: 30,
  },
});

export default SecondScreen;
