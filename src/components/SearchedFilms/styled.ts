import styled from 'styled-components';

interface SearchedFilmsProps {
  $isScrolled?: boolean;
}

export const SearchedFilmsContainer = styled.ul<SearchedFilmsProps>`
  max-height: 350px;
  overflow-y: ${(props) => props.$isScrolled !== null && 'scroll'};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  max-width: 600px;
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
export const InfoContainer = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
export const Info = styled.div`
  padding: 1em;
  color: ${({ theme }) => theme.colors.primary};
`;
