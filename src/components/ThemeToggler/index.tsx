import { type FC, memo, useEffect } from 'react';
import { ThemeEnum } from '@constants/types/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import { selectTheme } from '@store/selectors/themeSelectors';
import { toggleTheme } from '@store/slices/themeSlice';

import { TogglerButton, TogglerContainer, TogglerInput, TogglerLabel } from './styled';

export const ThemeToggler: FC = memo(() => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const onChange = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <TogglerContainer data-testid='theme-toggler'>
      <TogglerInput
        type='checkbox'
        id={theme.type}
        onChange={onChange}
        checked={theme.type === ThemeEnum.dark}
        data-testid='theme-checkbox'
      />
      <TogglerLabel htmlFor={theme.type}>
        <TogglerButton />
      </TogglerLabel>
    </TogglerContainer>
  );
});
