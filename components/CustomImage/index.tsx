import type { FC } from 'react';
import NextImage from 'next/image';

type Props = { src: string; [key: string]: any };

const customLoader = ({ src }) => src;

const Image: FC<Props> = props => {
  return <NextImage unoptimized {...props} loader={customLoader} />;
};

export default Image;
