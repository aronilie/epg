import { MouseEventHandler } from 'react';
import ButtonStyled from './ButtonStyled';

interface ButtonProps {
    children: React.ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
}

const Button = ({ children, onClick }: ButtonProps) => {
    return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
