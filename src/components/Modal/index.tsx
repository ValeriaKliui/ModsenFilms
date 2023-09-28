import { useAppSelector } from '../../store/hooks/hooks';
import { selectIsModalOpened } from '../../store/slices/ModalsSlice';
import { selectMovieID } from '../../store/slices/ShowingFilmsSlice';
import { useVideo } from '../../utils/FilmsApi/hooks/useVideo';
import { ModalContainer, Video, CloseIcon } from './styled';
import closeIcon from '../../assets/img/close_icon.svg';

export const Modal: React.FC = () => {
  const isModalOpened = useAppSelector(selectIsModalOpened);
  //   const { ref } = useClickOutside({ isOpened: isModalOpened, setIsOpened: setIsModalOpened });
  //   console.log(ref.current);
  const movieID = useAppSelector(selectMovieID);
  const { src } = useVideo({ movieID });

  return (
      <>
          {isModalOpened && (
          <ModalContainer $isOpened={isModalOpened}>
              <CloseIcon src={closeIcon} />
              <Video
                  width="50%"
                  height="50%"
                  src={src}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
          />
          </ModalContainer>
      )}
      </>
  );
};
