import { ButtonStyled } from './styled';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};
