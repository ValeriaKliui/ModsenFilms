import { type FC } from 'react';

import { Avatar, Description, Image, Info, Skeleton } from './styled';

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
