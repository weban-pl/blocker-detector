import * as React from 'react';
import { BlockerAlert } from './components/BlockerAlert';
import { BlockerDetector } from './components/BlockerDetector';

type Props = {
  children: JSX.Element
}

const Component = ({ children } : Props) => {
  return (
    <BlockerAlert>
      {children}
    </BlockerAlert>
  );
}

export { BlockerAlert, BlockerDetector }
export default Component;
