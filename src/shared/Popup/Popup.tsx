import TodayInfoItem from '../../pages/Home/components/TodayInfoItem/TodayInfoItem';
import Card from '../Card/Card';
import { close } from '../../store/slices/popupSlice';
import s from './Popup.module.scss';
import { useCustomDispatch, useCustomSelector } from '../../hooks/useStore';

const Popup = () => {
	const { weather, day } = useCustomSelector((state) => state.popupSlice);

	const dispatch = useCustomDispatch();

	const { city } = useCustomSelector((state) => state.citySlice);

	const handleClose = () => {
		dispatch(close());
	};
	return (
		<>
			<div className={s.backdrop}></div>
			<Card className={s.card_center}>
				<div className={s.popup}>
					<div className={s.inner}>
						<div className={s.close} onClick={handleClose}>
							&times;
						</div>
						<div className={s.wrapper}>
							<div className={s.temperature}>{weather.temp.day}°</div>
							<div className={s.day}>{day}</div>
							<div className={s.svg}>
								<img
									src={`http://openweathermap.org/img/wn/${weather.weatherType.code}@4x.png`}
									alt='weather icon'
								/>
							</div>
							<div className={s.city}>Город: {city.label}</div>
						</div>
						<div className={s.wrapper}>
							<TodayInfoItem
								svgId='temperature'
								title='Температура'
								value={`${weather.temp.day}° - ощущается как ${weather.feels_like.day}°`}
							/>
							<TodayInfoItem
								svgId='humidity'
								title='Давление'
								value={`${weather.pressure.value} мм ртутного столба - ${weather.pressure.type}`}
							/>
							<TodayInfoItem
								svgId='precipitation'
								title='Осадки'
								value={`${weather.humidity.value}%`}
							/>
							<TodayInfoItem
								svgId='wind'
								title='Ветер'
								value={`${weather.wind_speed.value} м/с юго-запад - ${weather.wind_speed.type}`}
							/>
						</div>
					</div>
				</div>
			</Card>
		</>
	);
};

export default Popup;
