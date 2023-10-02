import { Skeleton, Image, Description, Avatar, Info } from './styled';

export const SkeletonLoader: React.FC = () => {
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
