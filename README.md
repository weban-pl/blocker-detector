## Description
Detect and display alert when ad block is enabled on a page

## Install

```bash
npm install blocker-detector
```

```bash
yarn add blocker-detector
```

## Usage
* You can get blocking status
```jsx
import { BlockerDetector } from 'blocker-detector';

const App = () => {
  let blocked = BlockerDetector();

  return (
    <>
      {blocked &&
        <span>Display when ad block has been detected</span>
      }
    </>
  );
};
```
* You can simple display alert

```jsx
import { BlockerAlert } from 'blocker-detector';

const App = () => (
  <BlockerAlert>
    <span>Display when ad block has been detected</span>
  </BlockerAlert>
);
```