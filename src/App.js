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
    const { ix, data } = this.props
    return (
      <input
        value={ data.value }
        onChange={ ev => this.change(ix, ev.target.value) }
        style={{ display: 'block', marginBottom: 5 }}
      />
    )
  }
}

const App = ({
  list,
  actions,
}) => (
  <div>
    { list.map((data, ix) => (
      <Inp {...{ key: ix, ix, data, change: actions.change }} />
    )) }
  </div>
)

export default App
