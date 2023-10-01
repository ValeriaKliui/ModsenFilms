import { Link } from 'react-router-dom';
import { FooterStyled, FooterInfo } from './styled';

export const Footer: React.FC = () => {
  return (
      <FooterStyled>
          <FooterInfo>
              <Link to="https://www.modsen-software.com/" target="_blank">
                  TermsPrivacyPolicy & Safety{' '}
              </Link>
              <Link to="https://www.modsen-software.com/" target="_blank">
                  How YouTube works
              </Link>
              <Link to="https://www.modsen-software.com/" target="_blank">
                  Test new features
              </Link>
          </FooterInfo>
          <FooterInfo>
              <Link to="https://www.modsen-software.com/" target="_blank">
                  About Press Copyright{' '}
              </Link>
              <Link to="https://www.modsen-software.com/" target="_blank">
                  Contact us Creators
              </Link>
              <Link to="https://www.modsen-software.com/" target="_blank">
                  Advertise Developers
              </Link>
          </FooterInfo>
      </FooterStyled>
  );
};
