import React, { useState, useEffect } from 'react';

export const BlockerDetector = () => {
  const [block, setBlock] = useState(false);

  useEffect(() => {
    let testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);

    if (testAd.offsetHeight === 0) {
      setBlock(true);
    }
    return () => testAd.remove();
  })

  return block;
};