import { useCustomSelector } from '../../hooks/useStore';
import SpinnerWrapper from '../../shared/SpinnerContainer/SpinnerWrapper';
import Days from './components/Days/Days';
import Today from './components/Today/Today';
import TodayInfo from './components/TodayInfo/TodayInfo';
import s from './Home.module.scss';

interface Props {
	cityName: string;
}

const Home = ({ cityName }: Props) => {
	const { isLoading } = useCustomSelector((state) => state.weatherSlice);

	return (
		<div className={s.home}>
			{isLoading ? (
				<SpinnerWrapper />
			) : (
				<>
					<div className={s.home_block}>
						<Today cityName={cityName} />
						<TodayInfo />
					</div>
					<Days />
				</>
			)}
		</div>
	);
};

export default Home;
