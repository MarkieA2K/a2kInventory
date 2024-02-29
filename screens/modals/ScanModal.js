// ScanModal.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ScanModal({ onClose }) {
  return (
    <View>
      <Text>This is the Scan Modal!</Text>
      <Button title='Close' onPress={onClose} />
    </View>
  );
}

export default ScanModal;
const styles = StyleSheet.create({
  dashboardContainer: {
    padding: 20,
    backgroundColor: '#b7cece',
    borderRadius: 10,
    height: 490,
    width: 320,
  },
});
