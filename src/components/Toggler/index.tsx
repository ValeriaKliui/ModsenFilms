import { ThemeEnum } from '@styles/theme';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import { selectTheme, toggleTheme } from '@store/slices/themeSlice';
import { TogglerButton, TogglerContainer, TogglerInput, TogglerLabel } from './styled';
import { type FC } from 'react';

export const Toggler: FC = () => {
  const dispatch = useAppDispatch();
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
