import React from 'react'

import Inp from './Inp'
import { throttle } from './helpers'

const List = props => {
  // comment
  return (
    <div
      className={ props.className }
    >
      <div
        className={ props.viewClassName }
        style={ props.style }
      >
        { props.list.map(el => (
          <div
            key={ `${el.style.left}-${el.style.top}` }
            className={ props.elementsClassName }
            style={ el.style }
          >
            { el.value }
          </div>
        )) }
      </div>
    </div>
  )
}

class App extends React.Component {
  componentWillMount() {
    console.timeEnd('other')
  }

  componentDidMount() {
    this.props.actions.size(this.scroll.clientWidth, this.scroll.clientHeight)
    this.props.actions.scroll(this.scroll.scrollLeft, this.scroll.scrollTop)

    this.scroll.addEventListener('resize', throttle(() => {
      this.props.actions.size(this.scroll.clientWidth, this.scroll.clientHeight)
    }, 16))
    this.scroll.addEventListener('scroll', throttle(e => {
      const scroll = e.target
      this.props.actions.scroll(scroll.scrollLeft, scroll.scrollTop)
    }, 16))
  }

  render() {
    const {
      cols,
      colsStyle,
      rows,
      rowsStyle,
      cells,
      cellsStyle,
      cn,
      actions,
    } = this.props

    return (
      <div
        className={ cn.box }
      >
        <List
          className={ cn.header }
          viewClassName={ cn.headerView }
          elementsClassName={ cn.headerItem }
          list={ cols }
          style={ colsStyle }
        />
        <List
          className={ cn.side }
          viewClassName={ cn.sideView }
          elementsClassName={ cn.sideItem }
          list={ rows }
          style={ rowsStyle }
        />
        <div
          className={ cn.cells }
        >
          <div
            className={ cn.cellsView }
            style={ cellsStyle }
          >
            { cells.map(el => (
              <Inp
                key={ `${el.style.left}-${el.style.top}` }
                style={ el.style }
                value={ el.value }
                change={ actions.change }
                cn={ cn }
              />
            )) }
          </div>
        </div>
        <div
          className={ cn.scroll }
          ref={ node => { this.scroll = node } }
        >
          <div
            style={ cellsStyle }
          />
        </div>
      </div>
    )
  }
}

export default App
