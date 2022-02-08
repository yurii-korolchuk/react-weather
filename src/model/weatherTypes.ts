export const weatherTypes = [
	{ type: 'clear sky', code: '01' },
	{ type: 'clouds', code: '02' },
	{ type: 'rain', code: '10' },
	{ type: 'thunderstorm', code: '11' },
	{ type: 'snow', code: '13' },
	{ type: 'mist', code: '50' },
] as const;

export type weatherType = 'clear sky' | 'clouds' | 'rain' | 'thunderstorm' | 'snow' | 'mist';
