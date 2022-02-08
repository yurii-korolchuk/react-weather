export const formatDate = (date: Date) => {
	if (date.getDate() === new Date().getDate()) {
		return 'Сегодня';
	}

	const nextDay = new Date();
	nextDay.setDate(nextDay.getDate() + 1);

	if (nextDay.getDay() === date.getDay()) {
		return 'Завтра';
	}

	return formatDateOfWeek(date);
};

const formatDateOfWeek = (date: Date) => {
	switch (date.getDay()) {
		case 0:
			return 'Воскресенье';
		case 1:
			return 'Понедельник';
		case 2:
			return 'Вторник';
		case 3:
			return 'Среда';
		case 4:
			return 'Четверг';
		case 5:
			return 'Пятница';
		case 6:
			return 'Суббота';
		default:
			return '';
	}
};

export const formatDateNumber = (date: Date) => {
	const day = date.getDate();
	switch (date.getMonth()) {
		case 0:
			return day + ' Янв';
		case 1:
			return day + ' Фев';
		case 2:
			return day + ' Мар';
		case 3:
			return day + ' Апр';
		case 4:
			return day + ' Мая';
		case 5:
			return day + ' Июн';
		case 6:
			return day + ' Июл';
		case 7:
			return day + ' Авг';
		case 8:
			return day + ' Сен';
		case 9:
			return day + ' Окт';
		case 10:
			return day + ' Ноя';
		case 11:
			return day + ' Дек';
		default:
			return '';
	}
};
