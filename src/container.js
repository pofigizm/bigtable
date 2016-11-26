import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'
import App from './App'

const mapStateToProps = state => ({
  list: state.list,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
