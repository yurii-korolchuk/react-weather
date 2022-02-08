export interface DailyWeather {
	temp: {
		day: number;
		night: number;
	};
	feels_like: {
		day: number;
		night: number;
	};
	humidity: number;
	pressure: number;
	weather: [
		{
			description: string;
		}
	];
	wind_speed: number;
}

export interface Weather {
	current: DailyWeather;
	daily: DailyWeather[];
}
