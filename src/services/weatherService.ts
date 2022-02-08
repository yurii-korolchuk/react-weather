import { AxiosResponse } from 'axios';
import api from '../axios';
import { Weather } from '../store/types/types';

interface Coords {
	coord: {
		lat: number;
		lon: number;
	};
}

class WeatherSerivce {
	static async getWeather(city: string): Promise<AxiosResponse<Weather>> {
		const res = await api.get<Coords>(`/weather?q=${city}`);
		const { lat, lon } = res.data.coord;

		return api.get<Weather>(`/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly`);
	}
}

export default WeatherSerivce;
