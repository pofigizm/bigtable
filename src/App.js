import React from 'react'
import shallowEqual from 'fbjs/lib/shallowEqual'

class Inp extends React.Component {
  shouldComponentUpdate(props) {
    return !shallowEqual(this.props.data, props.data)
  }
  change(...args) {
    this.props.change(...args)
  }
  render() {
    const { ix, data, cn } = this.props
    return (
      <input
        value={ data.value }
        onChange={ ev => this.change(ix, ev.target.value) }
        className={cn.input}
      />
    )
  }
}

const App = ({
  list,
  actions,
  cn,
}) => (
  <div>
    { list.map((data, ix) => (
      <Inp {...{ key: ix, ix, data, change: actions.change, cn }} />
    )) }
  </div>
)

export default App
