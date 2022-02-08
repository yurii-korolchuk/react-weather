import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Weather, DailyWeather } from '../types/types';

interface WeatherState {
	isLoading: boolean;
	daily: DailyWeather[];
}

const initialState: WeatherState = {
	isLoading: true,
	daily: [
		{
			temp: {
				day: 0,
				night: 0,
			},
			feels_like: {
				day: 0,
				night: 0,
			},
			humidity: 0,
			pressure: 0,
			weather: [
				{
					description: '',
				},
			],
			wind_speed: 0,
		},
	],
};

export const weatherSlice = createSlice({
	name: 'weather',
	initialState: initialState,
	reducers: {
		fetchWeather: (state) => {
			state.isLoading = true;
		},
		fetchWeatherSuccess: (state, action: PayloadAction<AxiosResponse<Weather>>) => {
			state.daily = action.payload.data.daily;
			state.isLoading = false;
		},
		fetchWeatherError: (state, action: PayloadAction<AxiosResponse<Weather>>) => {
			state.isLoading = false;
		},
	},
});

export default weatherSlice.reducer;
