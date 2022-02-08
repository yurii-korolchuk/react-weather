import { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from '../context/ThemeContext';
import changeCssRootVariables from '../model/changeCssRootVariables';
import { storage } from '../model/storage';

interface Props {
	children: ReactNode;
}

const ThemeProvider = ({ children, ...props }: Props) => {
	const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);

	changeCssRootVariables(theme);

	const changeTheme = () => {
		setTheme((prevTheme) => {
			return prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
		});
	};

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
