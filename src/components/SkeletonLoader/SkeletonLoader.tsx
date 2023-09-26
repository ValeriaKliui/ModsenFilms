import { Skeleton, Image, Description } from './styled';

export const SkeletonLoader: React.FC = () => {
  return (
      <Skeleton>
          <Image />
          <Description />
      </Skeleton>
  );
};
