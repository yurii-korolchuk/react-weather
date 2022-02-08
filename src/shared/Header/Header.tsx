import GlobalSvgSelector from '../../assets/icons/shared/GlobalSvgSelector';
import Select from 'react-select';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import { useEffect } from 'react';
import changeCssRootVariables from '../../model/changeCssRootVariables';
import { Cities, City, CityCode } from '../../model/cities';

interface Props {
	defaultCity: City;
	cities: Cities;
	onSelect: (city: City) => void;
}

const Header = ({ defaultCity, onSelect, cities }: Props) => {
	const { theme, changeTheme } = useTheme();
	const handleThemeChange = () => {
		changeTheme();
	};

	const handleSelect = (value: any) => {
		onSelect(value);
	};

	const colourStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
			border: 'none',
			borderRadius: '10px',
			zIndex: 100,
		}),
		singleValue: (styles: any) => ({
			...styles,
			color: theme === 'dark' ? '#ffffff' : '#000000',
		}),
	};

	useEffect(() => {
		changeCssRootVariables(theme);
	}, [theme]);

	return (
		<header className={s.header}>
			<div className={`${s.wrapper} ${s.wrapper_upper}`}>
				<NavLink to='/'>
					<div className={s.wrapper}>
						<div className={s.logo}>
							<GlobalSvgSelector id='logo' />
						</div>
						<h1 className={s.title}>React Weather</h1>
					</div>
				</NavLink>
			</div>
			<div className={s.wrapper}>
				<div className={s['change-theme']} onClick={handleThemeChange}>
					<GlobalSvgSelector id='change-theme' />
				</div>
				<div className={s.location}>
					<Select
						defaultValue={defaultCity}
						styles={colourStyles}
						options={cities}
						onChange={handleSelect}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
