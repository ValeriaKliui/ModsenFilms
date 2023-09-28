import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 570px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  position: relative;
`;
export const Input = styled.input`
  width: 570px;
  height: 38px;
  padding: 15px;
  font-size: inherit;
  border: none;
  outline: none;
`;
export const SearchedFilms = styled.ul`
  max-height: 350px;
  overflow-y: scroll;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.bg};
`;
export const SearchField = styled.div`
  display: flex;
`;
export const SearchButton = styled.button`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.bg};
  border: none;
  border-left: 2px solid ${({ theme }) => theme.colors.border};
`;
