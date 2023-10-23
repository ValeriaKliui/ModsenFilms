export interface useModalI {
  openModal: () => void;
  closeModal: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleMenu: () => void;
  isModalOpened: boolean;
  isSearchOpened: boolean;
  isMenuOpened: boolean;
}
