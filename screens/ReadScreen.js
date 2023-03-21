import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { removeItem } from '../store/itemSlice';
import { useDispatch } from 'react-redux';


function ItemCard ({ item, onDelete, onUpdate }) {
	return (
	  <View style={styles.card}>
		<Text style={styles.title}>{item.name}</Text>
		<Text style={styles.description}>{item.description}</Text>
		<View style={styles.footer}>
			<TouchableOpacity onPress={onUpdate}>
			  <Ionicons name="pencil-outline" size={24} color="black" />
			</TouchableOpacity>
			<Text style={styles.quantity}>{item.quantity} db</Text>
			<TouchableOpacity onPress={onDelete}>
			  <Ionicons name="trash-outline" size={24} color="red" />
			</TouchableOpacity>
		</View>
	  </View>
	);
  };

  

export function ReadScreen({ navigation }) {
	const items = useSelector((state) => state.items.value);
	const dispatch = useDispatch();

	
	const handleRemoveItem = (itemId) => {
		dispatch(removeItem(itemId));
	};
	
	const handleUpdateItem = (item) => {
		navigation.navigate('Update', { oldItem: item });
	};
	  
	
	return (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<FlatList
			data={items}
			renderItem={({ item }) => (
				<ItemCard 
					item={item} 
					onDelete={() => handleRemoveItem(item.id)}
					onUpdate={() => handleUpdateItem(item)}
				/>
			)}
			keyExtractor={(item) => item.id}
			style={{ width: '100%' }}
		  />
		</View>
	);
}


const styles = StyleSheet.create({
	card: {
	  backgroundColor: 'white',
	  borderRadius: 10,
	  padding: 20,
	  margin: 10,
	  elevation: 5,
	  width: '100%'
	},
	title: {
	  fontWeight: 'bold',
	  fontSize: 16,
	  marginBottom: 5,
	},
	description: {
	  fontSize: 14,
	  marginBottom: 10,
	},
	footer: {
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  alignItems: 'center',
	},
	quantity: {
	  fontSize: 14,
	},
	icons: {
	  flexDirection: 'row',
	},
  });