import * as S from './styled';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return <S.ButtonStyled onClick={onClick}>{text}</S.ButtonStyled>;
};
