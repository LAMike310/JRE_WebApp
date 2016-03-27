import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TextFilter from 'react-text-filter'
import LazyLoad from 'react-lazyload'
import Radium from 'radium'
import VideoItem from './VideoItem'
let divStyle = {
  color: 'black'
};
let buttonStyle = {
  background: '#3498db',
  color: 'white'
}
var styles = {
  base: {
    color: 'black',
  },
  cardAction: {
    border: 'none'
  },
  cardLink: {
    position: 'absolute',
    bottom: '20px',
    right: '25px'

  },
  inputStyle: {
    margin: '0 0 2px 0'
  },
  cardStyle: {
    minHeight: '450px'
  }
};
class Videos extends Component {
  componentDidMount() {
      this.props.actions.getVideos()
  }
  constructor(props) {
      super(props);
      this.state = {
        searchString: ''
      }
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  handleChange(e){
      this.setState({searchString:e.target.value});
  }
  handleVideoClick(id) {
    console.log("Hello")
    this.props.setFeaturedVideo()
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
      <div className="row">

        <div className="row">
          <div className="container">
              <div className="col s12">
                <iframe width='100%' height='400' src={`https://www.youtube.com/embed/${this.props.videos[0].videoID}`} frameBorder='0' allowFullScreen></iframe>
              </div>
          </div>
          <div className="container">
              <div className="col s9 offset-s2">
                <input type="text" value={this.state.searchString}
                onChange={this.handleChange.bind(this)}
                placeholder="Search all JRE podcasts..."
                style={styles.inputStyle}
                />
                <label>{videos.length} found</label>
              </div>
          </div>
        </div>
        <div className="container">
          <ul className="row">
              {videos.map(function(result) {
                return (
                  <LazyLoad offset={100}  key={result.position}>
                    <VideoItem video={result} handleVideoClick={this.props.actions.setFeaturedVideo} />
                  </LazyLoad>
                )
              })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Videos
