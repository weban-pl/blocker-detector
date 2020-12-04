import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

export default class Demo extends Component {
  render() {
    return <div>
      <h1>blocker-detector Demo</h1>
      <Example>
        Oh no! Please turn off adblock!!
      </Example>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
