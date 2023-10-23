import { FilmsCatalog } from '@components/FilmsCatalog';
import { Modal } from '@components/Modal';
import { Navbar } from '@components/Navbar';
import { Video } from '@components/Video';

import { Main } from './styled';

export const MainPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Modal>
        <Video />
      </Modal>
      <Main>
        <FilmsCatalog />
      </Main>
    </>
  );
};
