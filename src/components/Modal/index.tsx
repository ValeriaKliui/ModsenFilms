import { type ReactNode } from 'react';
import { Content, ModalStyled, Overlay } from './styled';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { selectIsModalOpened, setIsModalOpened } from '../../store/slices/ModalsSlice';
import { setMovieID } from '../../store/slices/filmsSlice';

interface ModalProps {
  children?: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const isModalOpened = useAppSelector(selectIsModalOpened);
  const dispatch = useAppDispatch();

  const closeHandler = (): void => {
    dispatch(setIsModalOpened(false));
    dispatch(setMovieID(null));
  };
  const onContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };
  return (
      <ModalStyled $opened={isModalOpened}>
          <Overlay onClick={closeHandler}>
              <Content onClick={onContentClick}>{children}</Content>
          </Overlay>
      </ModalStyled>
  );
};
