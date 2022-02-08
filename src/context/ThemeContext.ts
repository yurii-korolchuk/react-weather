import { createContext } from 'react';

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

interface Props {
	theme: Theme;
	changeTheme: () => void;
}

export const ThemeContext = createContext<Props>({
	theme: Theme.LIGHT,
	changeTheme: () => {},
});
