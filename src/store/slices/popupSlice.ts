import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormattedWeather } from '../../model/formatWeather';

interface popupState {
	isOpen: boolean;
	weather: FormattedWeather;
	day: string;
}

const initialState: popupState = {
	isOpen: false,
	weather: {
		temp: {
			day: 0,
			night: 0,
		},
		feels_like: {
			day: 0,
			night: 0,
		},
		humidity: {
			value: 0,
			type: '',
		},
		pressure: {
			value: 0,
			type: '',
		},
		weatherType: {
			description: '',
			code: '',
		},
		wind_speed: {
			value: 0,
			type: '',
		},
	},
	day: '',
};

interface popupPayload {
	weather: FormattedWeather;
	day: string;
}

export const popupSlice = createSlice({
	name: 'popup',
	initialState: initialState,
	reducers: {
		open: (state, action: PayloadAction<popupPayload>) => {
			document.body.style.overflow = 'hidden';
			state.weather = action.payload.weather;
			state.day = action.payload.day;
			state.isOpen = true;
		},
		close: (state) => {
			document.body.style.overflow = 'auto';
			state.isOpen = false;
		},
	},
});

export const { open, close } = popupSlice.actions;
export default popupSlice.reducer;
