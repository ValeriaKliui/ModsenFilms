import { Films } from '@components/Films';
import { Modal } from '@components/Modal';
import { Sort } from '@components/Sort';
import { Video } from '@components/Video';

import { Main } from './styled';

export const MainPage: React.FC = () => {
  return (
    <>
      <Sort />
      <Modal>
        <Video />
      </Modal>
      <Main>
        <Films />
      </Main>
    </>
  );
};
