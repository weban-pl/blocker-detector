import * as React from 'react'
import {render} from 'react-dom'
import Example from '../../src'

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <h1>blocker-detector Demo</h1>
        <Example>
          <span>Oh no! Please turn off adblock!!</span>
        </Example>
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
