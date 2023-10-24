import { FILMS_LIMIT } from '@constants/filmsConstants';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import {
  setFilmsPerPage,
  setFirstPage,
  setSearchQuery,
  setSearchTitle,
} from '@store/slices/filmsSlice';

export const useCatalog = () => {
  const dispatch = useAppDispatch();
  const setInitCatalog = () => {
    dispatch(setFirstPage());
    dispatch(setFilmsPerPage(FILMS_LIMIT));
    dispatch(setSearchTitle(''));
    dispatch(setSearchQuery(''));
  };

  return { setInitCatalog };
};
