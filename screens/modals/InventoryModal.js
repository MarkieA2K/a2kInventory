import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import supabase from '../services/supabase';
import { Card, Button, DataTable } from 'react-native-paper';

function InventoryModal({ onClose }) {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    fetchInventoryData();
  }, []);

  const fetchInventoryData = async () => {
    try {
      const { data, error } = await supabase.from('InventoryList').select('*');

      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        console.log('Fetched data:', data);
        setInventoryItems(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <View>
      <ScrollView>
        {inventoryItems.map((item) => (
          <Card key={item.Item_Id}>
            <Text>{item.Item_Name}</Text>
            <Card.Actions>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>

      <View style={styles.closeContainer}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default InventoryModal;

const styles = StyleSheet.create({
  inventoryContainer: {
    alignItems: 'center',
  },
});
