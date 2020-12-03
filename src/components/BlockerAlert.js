import React from 'react';
import { BlockerDetector } from './BlockerDetector';

export const BlockerAlert = ({ children }) => {
  let blocked = BlockerDetector();

  return <>{blocked && children}</>;
};