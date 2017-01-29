import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'
import App from './App'

const mapStateToProps = (state, props) => ({
  cols: state.cols.slice(state.showCols.first, state.showCols.last),
  colsStyle: state.showCols.style,
  rows: state.rows.slice(state.showRows.first, state.showRows.last),
  rowsStyle: state.showRows.style,
  cells: state.cells.slice(state.showCols.first, state.showCols.last)
    .reduce((acc, col) => ([
      ...acc,
      ...col.rows.slice(state.showRows.first, state.showRows.last)
        .map(row => ({
          ...row,
          xid: col.xid,
          style: {
            ...state.cols[col.xid].style,
            ...state.rows[row.yid].style,
          },
        })),
    ]), []),
  cellsStyle: {
    ...state.showCols.style,
    ...state.showRows.style,
  },
  cn: props.sheet.classes,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
