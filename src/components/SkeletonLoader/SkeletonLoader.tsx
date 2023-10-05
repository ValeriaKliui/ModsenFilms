import { Skeleton, Image, Description, Avatar, Info } from './styled';
import { type FC } from 'react';

export const SkeletonLoader: FC = () => {
  return (
      <Skeleton>
          <Image />
          <Description>
              <Avatar />
              <Info />
          </Description>
      </Skeleton>
  );
};
