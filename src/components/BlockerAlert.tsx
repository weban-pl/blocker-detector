import * as React from 'react';
import { BlockerDetector } from './BlockerDetector';

type Props = {
  children: JSX.Element
}

export const BlockerAlert: React.FC<Props> = ({ children }) => {
  let blocked = BlockerDetector();

  return (
    <>
      {blocked && children}
    </>
  );
};