import { Theme } from '../context/ThemeContext';
import { storage } from './storage';

const changeCssRootVariables = (theme: Theme) => {
	const root = document.querySelector(':root') as HTMLElement;

	const components: string[] = [
		'--body-background',
		'--card-background',
		'--day-background',
		'--text-color',
	];

	components.forEach((comp) => {
		root.style.setProperty(`${comp}-default`, `var(${comp}-${theme})`);
	});

	storage.setItem('theme', theme);
};

export default changeCssRootVariables;
