// Dashboard.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Button } from 'react-native';
import InventoryModal from './modals/InventoryModal';
import ScanModal from './modals/ScanModal.js';

function Dashboard({ userToken }) {
  const [inventoryModalVisible, setInventoryModalVisible] = useState(false);
  const [scanModalVisible, setScanModalVisible] = useState(false);

  const inventoryModalView = () => {
    setInventoryModalVisible(!inventoryModalVisible);
  };

  const openScanModal = () => {
    setScanModalVisible(!scanModalVisible);
  };

  const confirmLogoutHandler = () => {
    userToken('');
    console.log('Logging out...');
  };

  return (
    <View style={styles.dashboardContainer}>
      <Text>Welcome to the Dashboard!</Text>
      <View style={styles.buttonContainer}>
        <Button title='Inventory' onPress={inventoryModalView} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Scan' onPress={openScanModal} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Logout' onPress={confirmLogoutHandler} />
      </View>

      {/* Inventory Modal */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={inventoryModalVisible}
        onRequestClose={inventoryModalView}
      >
        <View style={styles.modalContainer}>
          <InventoryModal onClose={inventoryModalView} />
        </View>
      </Modal>

      {/* Scan Modal */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={scanModalVisible}
        onRequestClose={openScanModal}
      >
        <View style={styles.modalContainer}>
          <ScanModal onClose={openScanModal} />
        </View>
      </Modal>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  dashboardContainer: {
    padding: 20,
    backgroundColor: '#b7cece',
    borderRadius: 10,
    height: 490,
    width: 320,
  },
  buttonContainer: {
    marginTop: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b7cece',
  },
});
