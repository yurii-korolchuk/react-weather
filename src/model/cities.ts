export const cities = [
	{ value: 'kiev', label: 'Киев' },
	{ value: 'vinnytsia', label: 'Винница' },
	{ value: 'dnepr', label: 'Днепр' },
	{ value: 'donetsk', label: 'Донецк' },
	{ value: 'zhytomyr', label: 'Житомир' },
	{ value: 'ivano-frankivsk', label: 'Ивано-Франковск' },
	{ value: 'kropyvnytskyi', label: 'Кропивницкий' },
	{ value: 'luhansk', label: 'Луганск' },
	{ value: 'lutsk', label: 'Луцк' },
	{ value: 'lvov', label: 'Львов' },
	{ value: 'mykolaiv', label: 'Николаев' },
	{ value: 'odessa', label: 'Одесса' },
	{ value: 'poltava', label: 'Полтава' },
	{ value: 'simferopol', label: 'Симферополь' },
	{ value: 'sumy', label: 'Сумы' },
	{ value: 'ternopil', label: 'Тернополь' },
	{ value: 'uzhhorod', label: 'Ужгород' },
	{ value: 'harkov', label: 'Харьков' },
	{ value: 'herson', label: 'Херсон' },
	{ value: 'cherkasy', label: 'Черкассы' },
	{ value: 'chernihiv', label: 'Чернигов' },
	{ value: 'chernivtsi', label: 'Черновцы' },
] as const;

export type City = typeof cities[number];
export type CityCode = typeof cities[number]['value'];
export type Cities = typeof cities;
