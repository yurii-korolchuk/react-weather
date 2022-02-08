import s from './Days.module.scss';

interface Props {}

const Tabs = () => {
	return (
		<div className={s.tabs}>
			<div className={s.tabs_wrapper}>
				<button className={`${s.tab} ${s.tab_active}`}>На неделю</button>
				{/* <button className={s.tab}>На месяц</button> */}
				{/* <button className={s.tab}>На 10 дней</button> */}
			</div>
			<div className={s.tabs_wrapper}>
				<button className={s.tab}>Отменить</button>
			</div>
		</div>
	);
};

export default Tabs;
