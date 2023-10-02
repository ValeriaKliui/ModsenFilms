import styled from 'styled-components';
import { devices } from '../../constants/styles/media';

export const TogglerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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
  width: 70px;
  height: 40px;
  border-radius: 100px;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  transition: background-color 0.2s;
  @media ${devices.md} {
    width: 50px;
    height: 30px;
  }
`;

export const TogglerButton = styled.span`
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  width: 40px;
  height: 40px;
  border-radius: 45px;
  transition: 0.2s;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  ${TogglerInput}:checked + ${TogglerLabel} & {
    left: calc(100% + 2px);
    transform: translateX(-100%);
  }

  ${TogglerLabel}:active & {
    width: 45px;
  }
  @media ${devices.md} {
    width: 30px;
    height: 30px;
    border-radius: 35px;
  }
`;
