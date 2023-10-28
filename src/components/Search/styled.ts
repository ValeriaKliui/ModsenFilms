import styled from 'styled-components';
import { transitionAnimation } from '@constants/styles/animation';
import { devices } from '@constants/styles/media';

export const SearchContainer = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndexes.search};
  flex-grow: 1;
  width: 100%;
  max-width: 627px;
  justify-self: center;
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
  border: 1px solid ${({ theme }) => theme.colors.border};
  svg {
    path {
      fill: ${({ theme }) => theme.colors.font};
    }
  }
  &:focus-within {
    border: 1px ${({ theme }) => theme.colors.primary} solid;
  }
  ${transitionAnimation}
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
  ${transitionAnimation}
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
export const SuggestedFilmsContainer = styled.ul<{
  $isScrolled?: boolean;
  $isSearchOpened?: boolean;
}>`
  max-height: 350px;
  overflow-y: ${({ $isScrolled = false }) => $isScrolled && 'scroll'};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  border: ${({ $isSearchOpened = false, theme }) =>
    $isSearchOpened && `1px solid ${theme.colors.primary}`};
  border-top: none;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #c4c4c4cc;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
  }
`;
export const Info = styled.div`
  padding: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;
