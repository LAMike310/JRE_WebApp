import React, { Component } from 'react'
import Videos from './Videos'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'


class App extends Component {
  render() {
    return (
      <div>
        <Videos getVideos={this.props.actions.getVideos} searchString={this.props.searchString} videos={this.props.videos} />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
