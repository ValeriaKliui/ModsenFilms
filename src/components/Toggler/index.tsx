import { ThemeEnum } from '../../constants/styles/theme';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { selectTheme, toggleTheme } from '../../store/slices/ThemeSlice';
import { TogglerButton, TogglerContainer, TogglerInput, TogglerLabel } from './styled';

interface TogglerProps {
  shouldBeHidden?: boolean;
}

export const Toggler: React.FC<TogglerProps> = ({ shouldBeHidden = false }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  return (
    <TogglerContainer $shouldBeHidden={shouldBeHidden}>
      <TogglerInput
        type="checkbox"
        id="dark"
        onChange={() => dispatch(toggleTheme())}
        checked={theme.type === ThemeEnum.dark}
      />
      <TogglerLabel htmlFor="dark">
        <TogglerButton />
      </TogglerLabel>
    </TogglerContainer>
  );
};
