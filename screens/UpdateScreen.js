import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, Button, View, StyleSheet, Alert } from 'react-native';
import { updateItem } from '../store/itemSlice';

const UpdateScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  
  const { oldItem } = route.params

  const [name, setName] = useState(oldItem.name);
  const [description, setDescription] = useState(oldItem.description);
  const [quantity, setQuantity] = useState(String(oldItem.quantity));

  const handleUpdate = () => {
    if (!name.trim() || !description.trim() || !quantity.trim()) {
		Alert.alert('Hibás mező', 'Kérlek töltsd ki a mezőt megfelelően', [
			{
			  text: 'Mégse',
			  onPress: () => console.log('Cancel Pressed'),
			  style: 'cancel',
			},
			{text: 'OK', onPress: () => console.log('OK Pressed')},
		  ]);
      return;
    }

    const newItem = {
	  id: String(Math.random()),
      name,
      description,
      quantity: parseInt(quantity),
    };
    dispatch(updateItem({oldItem, newItem}));
    navigation.navigate('Read');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Product description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default UpdateScreen;