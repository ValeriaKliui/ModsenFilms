import { Link } from 'react-router-dom';
import { FooterStyled, FooterLinks, FooterText, FooterNetworks, NetworkIcon, Copyright, FooterInfo } from './styled';
import FbIcon from '../../assets/img/networks/fb.svg';
import TwitterIcon from '../../assets/img/networks/twitter.svg';
import IgIcon from '../../assets/img/networks/ig.svg';
import LinkedinIcon from '../../assets/img/networks/linkedin.svg';
import { type FC } from 'react';

export const Footer: FC = () => {
  const networks = [
    { link: 'https://www.facebook.com/ModsenSoftware/', Icon: FbIcon },
    { link: 'https://twitter.com/modsencompany', Icon: TwitterIcon },
    { link: 'https://www.instagram.com/modsencompany', Icon: IgIcon },
    { link: 'https://www.linkedin.com/company/modsen/', Icon: LinkedinIcon },
  ];
  const fakeLink = 'https://www.modsen-software.com/';

  return (
    <FooterStyled>
      <FooterInfo>
        <FooterText>
          <FooterLinks>
            <Link to={fakeLink} target="_blank">
              TermsPrivacyPolicy & Safety{' '}
            </Link>
            <Link to={fakeLink} target="_blank">
              How YouTube works
            </Link>
            <Link to={fakeLink} target="_blank">
              Test new features
            </Link>
          </FooterLinks>
          <FooterLinks>
            <Link to={fakeLink} target="_blank">
              About Press Copyright{' '}
            </Link>
            <Link to={fakeLink} target="_blank">
              Contact us Creators
            </Link>
            <Link to={fakeLink} target="_blank">
              Advertise Developers
            </Link>
          </FooterLinks>
        </FooterText>
        <FooterNetworks>
          {networks.map(({ link, Icon }) => (
            <Link to={link} target="_blank" key={link}>
              <NetworkIcon>
                <Icon />
              </NetworkIcon>
            </Link>
          ))}
        </FooterNetworks>
      </FooterInfo>
      <Copyright>2023 Modsen company</Copyright>
    </FooterStyled>
  );
};
