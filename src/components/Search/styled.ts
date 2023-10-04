import styled from 'styled-components';
import { hoverAnimation } from '@constants/styles/animation';
import { devices } from '@constants/styles/media';

export const SearchContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.border};
  position: relative;
  z-index: 100;
  flex-grow: 1;
  width: 100%;
  max-width: 627px;
  justify-self: center;
  svg {
    path {
      fill: ${({ theme }) => theme.colors.font};
    }
  }
  &:hover {
    border: ${({ theme }) => theme.colors.primary} 2px solid;
  }
  ${hoverAnimation}
  @media ${devices.sm} {
    grid-area: 2 / 1 / 2 / 4;
  }
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
export const SearchedFilmsContainer = styled.ul<{ $isScrolled: boolean }>`
  max-height: 350px;
  overflow-y: ${({ $isScrolled }) => $isScrolled && 'scroll'};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(196, 196, 196, 0.8);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
  }
`;
export const Info = styled.div`
  padding: 1em;
  color: ${({ theme }) => theme.colors.primary};
`;
