import React, { Component } from 'react'
import TextFilter from 'react-text-filter'
// Material UI
class Videos extends Component {
  componentDidMount() {
      this.props.getVideos()
      console.log("getting videos");
  }
  constructor(props) {
      super(props);
      this.state = {
        searchString: ''
      }
  }
  handleChange(e){
      this.setState({searchString:e.target.value});
  }
  render() {
    if(this.props.videos.length == 0){
      return <p>Loading....</p>
    }
    var videos = this.props.videos,
      searchString = this.state.searchString.trim().toLowerCase();
      if(searchString.length > 0){
          videos = videos.filter(function(l){
              return l.title.toLowerCase().match( searchString );
          });
      }
    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="Type here" />
        {this.props.videos[0].title}
        <ul>
          {videos.map(function(result) {
            return <li key={result.position}>{result.title}</li>;
          })}
        </ul>
      </div>
    )
  }
}

export default Videos
