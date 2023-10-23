import { scaleAnimation } from '@constants/styles/animation';
import { wrapper } from '@constants/styles/global';
import { devices } from '@constants/styles/media';
import styled from 'styled-components';

export const FooterStyled = styled.footer`
  ${wrapper};
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2em;
  @media ${devices.sm} {
    justify-content: center;
  }
`;
export const FooterText = styled.div`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
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
  ${'&: hover'} {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  ${scaleAnimation};
`;
export const Copyright = styled.h3`
  color: ${({ theme }) => theme.colors.copyright};
  align-self: center;
`;
