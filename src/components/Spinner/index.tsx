import { SpinnerStyled } from './styled';

interface SpinnerProps {
  size: number;
}
export const Spinner: React.FC<SpinnerProps> = ({ size }) => {
  return <SpinnerStyled $size={size} />;
};
