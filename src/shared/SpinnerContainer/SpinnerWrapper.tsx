import s from './SpinnerWrapper.module.scss';
import { TailSpin } from 'react-loader-spinner';

const SpinnerWrapper = () => {
	return (
		<div className={s.spinner_wrapper}>
			<TailSpin width='50%' height='50%' color='grey' ariaLabel='loading' />
		</div>
	);
};

export default SpinnerWrapper;
