import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text, StyleSheet, Modal} from 'react-native';

const MainScreenModal = ({modalVisible, setVisible}) => {
  return (
    <View>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.container}>
            <Text style={styles.text}>Modal</Text>
            <Button
              containerStyle={styles.button}
              title="Close modal"
              onPress={() => setVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: '85%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  text: {
    marginVertical: 10,
  },
  button: {
    marginBottom: 20,
    width: 200,
  },
});

export default MainScreenModal;
