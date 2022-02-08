import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useCustomDispatch, useCustomSelector } from './hooks/useStore';
import { cities, City } from './model/cities';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import ThemeProvider from './provider/ThemeProvider';
import Header from './shared/Header/Header';
import Popup from './shared/Popup/Popup';
import { changeCity } from './store/slices/citySlice';
import fetchWeather from './store/thunks/fetchWeather';
import './styles/index.scss';

function App() {
	const dispatch = useCustomDispatch();
	const { city } = useCustomSelector((state) => state.citySlice);
	const { isOpen } = useCustomSelector((state) => state.popupSlice);

	useEffect(() => {
		dispatch(fetchWeather(city.value));
	}, [city, dispatch]);

	const handleCityChange = (city: City) => {
		dispatch(changeCity(city));
	};

	return (
		<ThemeProvider>
			<div className='container'>
				{isOpen ? <Popup /> : null}
				<Header cities={cities} defaultCity={city} onSelect={handleCityChange} />
				<Routes>
					<Route path='/' element={<Home cityName={city.label} />} />
					<Route path='/month-statistics' element={<MonthStatistics />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
