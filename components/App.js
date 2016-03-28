import React, { Component } from 'react'
import Videos from './Videos'
import Header from './Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Videos
          searchString={this.props.searchString}
          videos={this.props.videos}
          actions={this.props.actions}
          featuredVideo={this.props.featuredVideo}
          isLoading={this.props.isLoading}
          />
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
