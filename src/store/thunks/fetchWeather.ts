import { CityCode } from '../../model/cities';
import WeatherSerivce from '../../services/weatherService';
import { weatherSlice } from '../slices/weatherSlice';
import { AppDispatch } from '../store';

const fetchWeather = (city: CityCode) => async (dispatch: AppDispatch) => {
	try {
		dispatch(weatherSlice.actions.fetchWeather());
		const res = await WeatherSerivce.getWeather(city);
		if (res.status === 200) {
			dispatch(weatherSlice.actions.fetchWeatherSuccess(res));
		} else {
			dispatch(weatherSlice.actions.fetchWeatherError(res));
		}
	} catch (e) {
		console.error(e);
	}
};

export default fetchWeather;
