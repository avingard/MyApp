import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { store } from './store/store'

import  CreateScreen  from './screens/CreateScreen';
import { ReadScreen } from './screens/ReadScreen';
import  UpdateScreen  from './screens/UpdateScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
	return (
		<Tab.Navigator
		screenOptions={{ headerShown: false }}>
			<Tab.Screen name="Create" component={CreateScreen} />
			<Tab.Screen name="Read" component={ReadScreen} />
		</Tab.Navigator>
	  );
}

   
export default function App() {
  return (
	<Provider store={store}>
		<NavigationContainer>
      		<Stack.Navigator>
        		<Stack.Screen name="Home" component={HomeTabs} />
        		<Stack.Screen name="Update" component={UpdateScreen} />
      		</Stack.Navigator>
    	</NavigationContainer>
	</Provider>
  );
}


