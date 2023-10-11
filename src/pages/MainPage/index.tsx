import { Sort } from '@components/Sort';
import { Films } from '@components/Films';
import { Main } from './styled';
import { Video } from '@components/Video';
import { Modal } from '@components/Modal';

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
