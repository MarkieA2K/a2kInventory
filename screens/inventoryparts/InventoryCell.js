import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const InventoryCell = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.ItemContainer}>{children}</Text>
  </TouchableOpacity>
);

export default InventoryCell;

const styles = StyleSheet.create({
  ItemContainer: {
    width: '100',
    height: '100',
    borderWidth: 1,
    borderColor: 'black',
  },
});
