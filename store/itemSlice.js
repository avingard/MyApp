import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

export const itemSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		createItem: (state, action) =>  {
			state.value = [...state.value, action.payload];
		},
		removeItem: (state, action) =>  {
			state.value = state.value.filter((item) => item.id !== action.payload);
		},
		updateItem: (state, action) =>  {
			const { oldItem, newItem } = action.payload;
			const index = state.value.findIndex((item) => item.id == oldItem.id);
			
			state.value = [...state.value.slice(0, index), newItem, ...state.value.slice(index + 1)];
		},
	}
});

export const { createItem, removeItem, updateItem } = itemSlice.actions;
export default itemSlice.reducer;
