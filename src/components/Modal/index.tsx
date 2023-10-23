import { type FC } from 'react';
import { type IModalProps } from '@constants/types/interfaces';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { useModals } from '@hooks/useModals/useModals';
import { setMovieID } from '@store/slices/filmsSlice';

import { Content, ModalStyled, Overlay } from './styled';

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
    <ModalStyled $opened={isModalOpened} data-testid='modal'>
      <Overlay onClick={closeHandler} data-testid='overlay'>
        <Content onClick={onContentClick}>{children}</Content>
      </Overlay>
    </ModalStyled>
  );
};
