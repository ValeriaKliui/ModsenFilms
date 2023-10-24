import styled from 'styled-components';
import { scaleAnimation } from '@constants/styles/animation';
import { wrapper } from '@constants/styles/global';
import { devices } from '@constants/styles/media';

export const FooterStyled = styled.footer`
  ${wrapper};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.gap32};
`;
export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.gaps.gap32};
  @media ${devices.sm} {
    justify-content: center;
  }
`;
export const FooterText = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps.gap32};
  flex-wrap: wrap;
`;
export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.gap8};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;
export const FooterNetworks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps.gap16};
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
