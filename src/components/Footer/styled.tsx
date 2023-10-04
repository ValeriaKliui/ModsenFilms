import styled from 'styled-components';
import { scaleAnimation } from '../../constants/styles/animation';
import { wrapper } from '../../constants/styles/global';

export const FooterStyled = styled.footer`
  ${wrapper};
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FooterText = styled.div`
  display: flex;
  gap: 2em;
`;
export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-weight: 700;
`;
export const FooterNetworks = styled.div`
  display: flex;
  gap: 1em;
`;
export const NetworkIcon = styled.div`
  ${scaleAnimation};
  &: hover {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
export const Copyright = styled.h3`
  color: ${({ theme }) => theme.colors.copyright};
  align-self: center;
`;
