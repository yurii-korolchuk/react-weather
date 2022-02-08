import Card from '../../../../shared/Card/Card';
import TodayInfoItem from '../TodayInfoItem/TodayInfoItem';
import s from './TodayInfo.module.scss';
import cloudImage from '../../../../assets/images/cloud.png';
import { formatWeather } from '../../../../model/formatWeather';
import { useCustomSelector } from '../../../../hooks/useStore';

const TodayInfo = () => {
	const { daily } = useCustomSelector((state) => state.weatherSlice);
	const { temp, feels_like, pressure, humidity, wind_speed } = formatWeather(daily[0]);

	return (
		<Card style={{ zIndex: -3 }}>
			<img className={s.today_info_image} src={cloudImage} alt='cloud' />
			<div className={s.today_info}>
				<TodayInfoItem
					svgId='temperature'
					title='Температура'
					value={`${temp.day}° - ощущается как ${feels_like.day}°`}
				/>
				<TodayInfoItem
					svgId='humidity'
					title='Давление'
					value={`${pressure.value} мм ртутного столба - ${pressure.type}`}
				/>
				<TodayInfoItem svgId='precipitation' title='Осадки' value={`${humidity.value}%`} />
				<TodayInfoItem
					svgId='wind'
					title='Ветер'
					value={`${wind_speed.value} м/с юго-запад - ${wind_speed.type}`}
				/>
			</div>
		</Card>
	);
};

export default TodayInfo;
