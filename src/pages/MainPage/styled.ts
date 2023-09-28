import styled from 'styled-components';
import { border, wrapper } from '../../constants/styles/global';

export const Main = styled.main`
  ${border};
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  ${wrapper};
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
