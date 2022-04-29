import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View, Text, StyleSheet, Button } from 'react-native';

const Test = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModalPress = () => setIsModalVisible(true);
  const handleCloseModalPress = () => setIsModalVisible(false);

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={handleOpenModalPress} />
      
      <Modal isVisible={isModalVisible} hasBackdrop={true}>
        <View style={styles.modalContentContainer}>
          <Text>Modal text</Text>
          <Button onPress={handleCloseModalPress} title="Close Modal"/>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"lightblue",
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  modalContentContainer: {
    backgroundColor:"white",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});

export default Test;
