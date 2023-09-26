import { Skeleton, Image, Description } from './styled';

export const SkeletonLoader = () => {
    return (
        <Skeleton>
            <Image />
            <Description />
        </Skeleton>
    );
};
