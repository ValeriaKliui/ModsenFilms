import styled from 'styled-components';
import { devices } from '@constants/styles/media';

export const TogglerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const TogglerInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const TogglerLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 68px;
  height: 40px;
  border-radius: 100px;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  transition: background-color 0.2s;
  @media ${devices.md} {
    width: 50px;
    height: 30px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const TogglerButton = styled.span`
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: 38px;
  height: 38px;
  border-radius: 45px;
  transition: 0.2s;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  @media ${devices.md} {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
  ${TogglerInput}:checked + ${TogglerLabel} & {
    left: calc(100% + 2px);
    transform: translateX(-100%);
  }

  ${TogglerLabel}:active & {
    width: 45px;
    @media ${devices.md} {
      width: 30px;
    }
  }
  @media ${devices.md} {
    width: 30px;
    height: 30px;
    border-radius: 35px;
  }
`;
