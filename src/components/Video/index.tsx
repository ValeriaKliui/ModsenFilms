import { lazy } from 'react';

export const Video = lazy(async () => await Promise.resolve(import('./video')));
