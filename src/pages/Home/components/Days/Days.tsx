import Card from '../../../../shared/Card/Card';
import Day from './Day';
import s from './Days.module.scss';
import Tabs from './Tabs';
import { v4 as uuidv4 } from 'uuid';
import { useCustomSelector } from '../../../../hooks/useStore';
import { formatWeather } from '../../../../model/formatWeather';

const Days = () => {
	const { daily } = useCustomSelector((state) => state.weatherSlice);

	return (
		<>
			<Tabs />
			<Card style={{ borderRadius: '0px 0px 20px 20px' }}>
				<div className={s.days_container}>
					{daily.map((day, i) => {
						const date = new Date();
						date.setDate(new Date().getDate() + i);

						if (i < 7) {
							return <Day key={uuidv4()} date={date} weather={formatWeather(day)} />;
						}
						return null;
					})}
				</div>
			</Card>
		</>
	);
};

export default Days;
