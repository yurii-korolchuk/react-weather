import { DailyWeather } from '../store/types/types';
import { weatherTypes } from './weatherTypes';
import { weatherType } from './weatherTypes';

export const formatWeatherType = (type: weatherType) => {
	switch (type) {
		case 'clear sky':
			return 'Ясно';
		case 'clouds':
			return 'Облачно';
		case 'rain':
			return 'Дождь';
		case 'thunderstorm':
			return 'Гроза';
		case 'snow':
			return 'Снег';
		case 'mist':
			return 'Туман';
		default:
			return '';
	}
};

export interface FormattedWeather {
	temp: {
		day: number;
		night: number;
	};
	feels_like: {
		day: number;
		night: number;
	};
	humidity: {
		value: number;
		type: string;
	};
	pressure: {
		value: number;
		type: string;
	};
	weatherType: {
		description: string;
		code: string;
	};
	wind_speed: {
		value: number;
		type: string;
	};
}

const farenheitToCelcius = (far: number) => {
	return Math.ceil((far * 5) / 9);
};

export const formatWeather = (weather: DailyWeather): FormattedWeather => {
	const temp = {
		day: farenheitToCelcius(weather.temp.day),
		night: farenheitToCelcius(weather.temp.night),
	};

	const feels_like = {
		day: farenheitToCelcius(weather.feels_like.day),
		night: farenheitToCelcius(weather.feels_like.night),
	};

	const humidity = {
		value: weather.humidity,
		type:
			weather.humidity < 40 ? 'пониженная' : weather.humidity > 80 ? 'повышенная' : 'нормальная',
	};

	const pressure = {
		value: Math.floor((weather.pressure * 100) / 133),
		type:
			Math.floor((weather.pressure * 100) / 133) > 760
				? 'повышенное'
				: Math.floor((weather.pressure * 100) / 133) < 750
				? 'пониженное'
				: 'нормальное',
	};

	const wind_speed = {
		value: Math.ceil(weather.wind_speed),
		type:
			Math.ceil(weather.wind_speed) <= 3
				? 'легкий ветер'
				: Math.ceil(weather.wind_speed) > 7
				? 'сильный ветер'
				: 'нормальный ветер',
	};

	const weatherType = {
		description: '',
		code: '',
	};

	weatherTypes.forEach((type) => {
		if (weather.weather[0].description.includes(type.type)) {
			weatherType.code =
				type.code + `${new Date().getHours() < 20 && new Date().getHours() > 6 ? 'd' : 'n'}`;

			weatherType.description = formatWeatherType(type.type);
		}
	});

	return { temp, feels_like, humidity, pressure, wind_speed, weatherType };
};
