import axios from 'axios';

const api = axios.create({
	baseURL: 'http://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use((config) => {
	config.url = config.url + '&units=metric' + `&appid=` + 'a439c5d3e8a578c1ebb325beed80c854';
	return config;
});

export default api;
