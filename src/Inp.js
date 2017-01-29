import React, { PureComponent } from 'react'

class Inp extends PureComponent {
  constructor() {
    super()
    this.change = this.change.bind(this)
  }

  change(ev) {
    this.props.change(
      this.props.xid,
      this.props.yid,
      'value',
      ev.target.value,
    )
  }

  render() {
    const { value, style, selected, cn } = this.props
    return (
      <input
        className={ selected ? cn.selectedCell : cn.cell }
        style={ style }
        value={ value }
        onChange={ this.change }
      />
    )
  }
}

export default Inp
