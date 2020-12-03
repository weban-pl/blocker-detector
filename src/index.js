import React, {Component} from 'react'
import { BlockerAlert } from './components/BlockerAlert';
import { BlockerDetector } from './components/BlockerDetector';

export { BlockerAlert, BlockerDetector }
export default class extends Component {
  render() {
    return (
      <BlockerAlert>
        {this.props.children}
      </BlockerAlert>
    );
  }
}
