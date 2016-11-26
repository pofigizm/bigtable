import React from 'react'
import shallowEqual from 'fbjs/lib/shallowEqual'

const HEIGHT = 25

class Inp extends React.Component {
  shouldComponentUpdate(props) {
    return !shallowEqual(this.props.data, props.data)
  }
  change(...args) {
    this.props.change(...args)
  }
  render() {
    const { data, cn } = this.props
    return (
      <div
        className={ cn.wrapper }
        style={{ top: data.ix * HEIGHT }}
      >
        <input
          value={ data.value }
          onChange={ ev => this.change(data.ix, 'value', ev.target.value) }
          className={ cn.input }
        />
        <input
          type="checkbox"
          checked={ data.select }
          onChange={ ev => this.change(data.ix, 'select', ev.target.checked) }
          className={ cn.checkbox }
        />
      </div>
    )
  }
}

export default Inp
