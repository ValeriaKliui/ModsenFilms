import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { fakeLink, networks } from '@constants/dataConstants/links';

import {
  Copyright,
  FooterInfo,
  FooterLinks,
  FooterNetworks,
  FooterStyled,
  FooterText,
  NetworkIcon,
} from './styled';

export const Footer: FC = () => {
  return (
    <FooterStyled>
      <FooterInfo>
        <FooterText>
          <FooterLinks>
            <Link to={fakeLink} target='_blank'>
              TermsPrivacyPolicy & Safety
            </Link>
            <Link to={fakeLink} target='_blank'>
              How YouTube works
            </Link>
            <Link to={fakeLink} target='_blank'>
              Test new features
            </Link>
          </FooterLinks>
          <FooterLinks>
            <Link to={fakeLink} target='_blank'>
              About Press Copyright
            </Link>
            <Link to={fakeLink} target='_blank'>
              Contact us Creators
            </Link>
            <Link to={fakeLink} target='_blank'>
              Advertise Developers
            </Link>
          </FooterLinks>
        </FooterText>
        <FooterNetworks>
          {networks.map(({ link, Icon }) => (
            <Link to={link} target='_blank' key={link}>
              <NetworkIcon>
                <Icon />
              </NetworkIcon>
            </Link>
          ))}
        </FooterNetworks>
      </FooterInfo>
      <Copyright data-testid='copyright'>2023 Modsen company</Copyright>
    </FooterStyled>
  );
};
