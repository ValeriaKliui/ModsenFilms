import * as S from './styled';
const options = ['All', 'action', 'drama', 'crime', 'romantic', 'horror', 'documentary'];

export const Sort: React.FC = () => {
  return (
    <S.Options>
      {options.map((option) => (
        <S.Option key={option}>{option}</S.Option>
      ))}
    </S.Options>
  );
};
