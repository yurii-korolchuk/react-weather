import { formatDate, formatDateNumber } from '../../../../model/formatDate';
import { FormattedWeather } from '../../../../model/formatWeather';
import s from './Days.module.scss';
import { open } from '../../../../store/slices/popupSlice';
import { useCustomDispatch } from '../../../../hooks/useStore';

interface Props {
	date: Date;
	weather: FormattedWeather;
}

const Day = ({ date, weather }: Props) => {
	const dispatch = useCustomDispatch();

	const handleClick = () => {
		dispatch(open({ weather, day: formatDate(date) }));
	};
	return (
		<div className={s.day} onClick={handleClick}>
			<div className={s.day_inner}>
				<div className={s.day_title}>{formatDate(date)}</div>
				<div className={s.day_date}>{formatDateNumber(date)}</div>
				<div className={s.day_img}>
					<img
						src={`http://openweathermap.org/img/wn/${weather.weatherType.code}@4x.png`}
						alt='weather icon'
					/>
				</div>
				<div className={s.day_temperature_day}>{weather.temp.day}°</div>
				<div className={s.day_temperature_night}>{weather.temp.night}°</div>
				<div className={s.day_weather}>{weather.weatherType.description}</div>
			</div>
		</div>
	);
};

export default Day;
