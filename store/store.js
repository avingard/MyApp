import { configureStore, createSlice } from '@reduxjs/toolkit';
import itemSlice from './itemSlice';


export const store = configureStore({
	reducer: {
		items: itemSlice
	}
})


