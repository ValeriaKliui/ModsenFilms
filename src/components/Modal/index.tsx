import { type FC } from 'react';
import { Content, ModalStyled, Overlay } from './styled';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { setMovieID } from '@store/slices/filmsSlice';
import { useModals } from '@hooks/useModals/useModals';
import { type IModalProps } from '@constants/types/interfaces';

export const Modal: FC<IModalProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { closeModal, isModalOpened } = useModals();

  const closeHandler = (): void => {
    closeModal();
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
