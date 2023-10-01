import styled from 'styled-components';
import { hoverAnimation } from '../../constants/styles/animation';

export const SearchContainer = styled.div`
  width: 570px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  position: relative;
  z-index: 100;
  svg {
    path {
      fill: ${({ theme }) => theme.colors.font};
    }
  }
  &:hover {
    border: ${({ theme }) => theme.colors.primary} 2px solid;
  }
  ${hoverAnimation}
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  max-width: 600px;
  padding: 15px;
  font-size: inherit;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.font};
`;

export const SearchForm = styled.form`
  display: flex;
`;
export const SearchButton = styled.button`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  border-left: 2px solid ${({ theme }) => theme.colors.border};
  ${hoverAnimation}
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-left: 2px solid ${({ theme }) => theme.colors.primary};
    svg {
      path {
        fill: ${({ theme }) => theme.colors.fontActive};
      }
    }
  }
`;
