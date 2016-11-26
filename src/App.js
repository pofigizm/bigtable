import React from 'react'

import Inp from './Inp'
import { throttle } from './helpers'

class App extends React.Component {
  componentWillMount() {
    this.props.actions.height(window.innerHeight)
    window.addEventListener('resize', throttle(() => {
      this.props.actions.height(window.innerHeight)
    }, 30))
    window.addEventListener('scroll', throttle(() => {
      const rec = document.body.getBoundingClientRect()
      this.props.actions.scroll(rec.top)
    }, 30))
  }
  render() {
    const { list, height, actions, cn } = this.props
    return (
      <div className={ cn.box } style={{ height }}>
        { list.map(data => (
          <Inp {...{ key: data.ix, data, change: actions.change, cn }} />
        )) }
      </div>
    )
  }
}

export default App
