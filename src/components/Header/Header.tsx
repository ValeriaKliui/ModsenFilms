import React from 'react';
import logoPic from '../../assets/img/logo.svg';
import * as S from './styles';
import { useAppDispatch } from '../../store/hooks/hooks';
import { toggleTheme } from '../../store/slices/ThemeSlice';

export const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <S.StyledHeader>
      <S.Logo>
        <img src={logoPic} alt="ModsenFilms" />
        <h1>ModsenFilms</h1>
        <button
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          sdfdsf
        </button>
      </S.Logo>
    </S.StyledHeader>
  );
};
