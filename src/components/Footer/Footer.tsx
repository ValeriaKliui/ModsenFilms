import React from 'react';
import * as S from './styles';

export const Footer = () => {
  return (
    <S.FooterStyled>
      <S.FooterInfo>
        <S.Text>TermsPrivacyPolicy & Safety </S.Text>
        <S.Text>How YouTube works</S.Text>
        <S.Text>Test new features</S.Text>
      </S.FooterInfo>
      <S.FooterInfo>
        <S.Text>About Press Copyright </S.Text>
        <S.Text>Contact us Creators</S.Text>
        <S.Text>Advertise Developers</S.Text>
      </S.FooterInfo>
    </S.FooterStyled>
  );
};
