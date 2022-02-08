import { ReactNode } from 'react';
import s from './Card.module.scss';
import CSS from 'csstype';

interface Props {
	children: ReactNode;
	className?: string;
	style?: CSS.Properties;
}

const Card = ({ style, className, children, ...props }: Props) => {
	return (
		<div className={`${s.card} ${className}`} style={style} {...props}>
			{children}
		</div>
	);
};

export default Card;
