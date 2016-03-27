import React, { Component } from 'react'
import TextFilter from 'react-text-filter'

class Videos extends Component {
  componentDidMount() {
      this.props.getVideos()
      console.log("getting videos");
  }
  render() {
    if(this.props.videos == undefined){
      return <p>Loading....</p>
    }
    return (
      <div>
        <ul>
          {this.props.videos.map(function(result) {
            return <li key={result.position}>{result.title}</li>;
          })}
        </ul>
      </div>
    )
  }
}

export default Videos
