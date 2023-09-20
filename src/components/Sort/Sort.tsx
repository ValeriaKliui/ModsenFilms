import React from 'react';
import * as S from './styles';
const options = ['All', 'action', 'drama', 'crime', 'romantic', 'horror', 'documentary'];

export const Sort = () => {
  return (
    <S.Options>
      {options.map((option) => (
        <S.Option key={option}>{option}</S.Option>
      ))}
    </S.Options>
  );
};
