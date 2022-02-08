import TodayInfoIconsSelector from '../../../../assets/icons/TodayInfoIcons/TodayInfoIconsSelector';
import { todayInfoSvgId } from '../../../../assets/icons/TodayInfoIcons/TodayInfoIconsSelector';
import s from './TodayInfoItem.module.scss';

interface Props {
	svgId: todayInfoSvgId;
	title: string;
	value: string;
}

const TodayInfoItem = (props: Props) => {
	return (
		<div className={s.today_info_item}>
			<div className={s.svg}>
				<TodayInfoIconsSelector id={props.svgId} />
			</div>
			<div className={s.title}>{props.title}</div>
			<div className={s.value}>{props.value}</div>
		</div>
	);
};

export default TodayInfoItem;
