import { type FC } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import { selectTheme } from '@store/selectors/themeSelectors';
import { toggleTheme } from '@store/slices/themeSlice';
import { ThemeEnum } from '@styles/theme';

import { TogglerButton, TogglerContainer, TogglerInput, TogglerLabel } from './styled';

export const ThemeToggler: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  return (
    <TogglerContainer data-testid='theme-toggler'>
      <TogglerInput
        type='checkbox'
        id={theme.type}
        onChange={() => dispatch(toggleTheme())}
        checked={theme.type === ThemeEnum.dark}
        data-testid='theme-checkbox'
      />
      <TogglerLabel htmlFor={theme.type}>
        <TogglerButton />
      </TogglerLabel>
    </TogglerContainer>
  );
};
