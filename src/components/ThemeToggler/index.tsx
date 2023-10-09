import { ThemeEnum } from '@styles/theme';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import { toggleTheme } from '@store/slices/themeSlice';
import { TogglerButton, TogglerContainer, TogglerInput, TogglerLabel } from './styled';
import { type FC } from 'react';

export const ThemeToggler: FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((store) => store.theme);
  console.log(theme.type);
  return (
    <TogglerContainer data-testid="theme-toggler">
      <TogglerInput
        type="checkbox"
        id="dark"
        onChange={() => dispatch(toggleTheme())}
        checked={theme.type === ThemeEnum.dark}
        data-testid="theme-checkbox"
      />
      <TogglerLabel htmlFor="dark">
        <TogglerButton />
      </TogglerLabel>
    </TogglerContainer>
  );
};
