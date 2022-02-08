import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../model/cities';
import { storage } from '../../model/storage';

interface cityState {
	city: City;
}

const initialState: cityState = {
	city: storage.getItem('city') || {
		value: 'kiev',
		label: 'Киев',
	},
};

export const citySlice = createSlice({
	name: 'city',
	initialState: initialState,
	reducers: {
		changeCity: (state, action: PayloadAction<City>) => {
			storage.setItem('city', action.payload);
			state.city = action.payload;
		},
	},
});

export const { changeCity } = citySlice.actions;
export default citySlice.reducer;
