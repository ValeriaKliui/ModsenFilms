import { ThemeEnum } from '../../constants/styles/theme';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { selectTheme, toggleTheme } from '../../store/slices/ThemeSlice';
import { TogglerButton, TogglerContainer, TogglerInput, TogglerLabel } from './styled';

export const Toggler: React.FC = () => {
  const dispatch = useAppDispatch();
  console.log(useAppSelector(selectTheme).type);
  const theme = useAppSelector(selectTheme);

  return (
    <TogglerContainer>
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
