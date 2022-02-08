import { useCustomSelector } from '../../../../hooks/useStore';
import { formatWeather } from '../../../../model/formatWeather';
import Card from '../../../../shared/Card/Card';
import SpinnerWrapper from '../../../../shared/SpinnerContainer/SpinnerWrapper';
import s from './Today.module.scss';

interface Props {
	cityName: string;
}

const Today = ({ cityName }: Props) => {
	const { isLoading, daily } = useCustomSelector((state) => state.weatherSlice);
	const formattedWeather = formatWeather(daily[0]);

	return (
		<Card>
			<div className={s.today}>
				<div className={s.top_block}>
					<div className={s.wrapper}>
						<div className={s.temperature}>{formattedWeather.temp.day}°</div>
						<div className={s.title}>Сегодня</div>
					</div>
					<div className={`${s.wrapper} ${s.img}`}>
						{isLoading ? (
							<SpinnerWrapper />
						) : (
							<img
								src={`http://openweathermap.org/img/wn/${formattedWeather.weatherType.code}@4x.png`}
								alt='weather icon'
							/>
						)}
					</div>
				</div>
				<div className={s.bottom_block}>
					<div className={s.city}>Город: {cityName}</div>
				</div>
			</div>
		</Card>
	);
};

export default Today;
