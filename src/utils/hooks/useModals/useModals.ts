import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import {
  selectIsMenuOpened,
  selectIsModalOpened,
  selectIsSearchOpened,
} from '../../../store/selectors/modalsSelectors';
import { setIsModalOpened, setIsSearchOpened, toggleMenu as toggle } from '../../../store/slices/modalsSlice';
import { type useModal } from './interface';

export const useModals = (): useModal => {
  const dispatch = useAppDispatch();
  const isModalOpened = useAppSelector(selectIsModalOpened);
  const isSearchOpened = useAppSelector(selectIsSearchOpened);
  const isMenuOpened = useAppSelector(selectIsMenuOpened);

  const openModal = (): void => {
    dispatch(setIsModalOpened(true));
  };
  const closeModal = (): void => {
    dispatch(setIsModalOpened(false));
  };
  const openSearch = (): void => {
    dispatch(setIsSearchOpened(true));
  };
  const closeSearch = (): void => {
    dispatch(setIsSearchOpened(false));
  };
  const toggleMenu = (): void => {
    dispatch(toggle());
  };

  return { openModal, closeModal, openSearch, closeSearch, toggleMenu, isModalOpened, isSearchOpened, isMenuOpened };
};
