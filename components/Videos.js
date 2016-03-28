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
    minHeight: '420px'
  }
};
class Videos extends Component {
  componentDidMount() {
      this.props.actions.getVideos()
  }
  componentDidUpdate() {
    this.getDOMNode().scrollTop = 0 ;
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
    const {actions, videos, featuredVideo, isLoading} = this.props
    if(isLoading){
      return <p>Loading....</p>
    }
    let searchString = this.state.searchString.trim().toLowerCase();
    var filteredVideos = videos
    if(searchString.length > 2){
        filteredVideos = videos.filter(function(l){
            return l.title.toLowerCase().match( searchString );
        });
    }
    this.props.featuredVideo == null  ? actions.setFeaturedVideo(videos[0], "0") : ''
    return (
      <div>
        <div className="container">
          <div className="row">
              <div className="col s12">
                <iframe width='100%' height='400' src={`https://www.youtube.com/embed/${featuredVideo}`} frameBorder='0' allowFullScreen></iframe>
              </div>
          </div>
        </div>
        <div className="container">
            <div className="row">
              <div className="col s9 offset-s2">
                <input type="text" value={this.state.searchString}
                onChange={this.handleChange.bind(this)}
                placeholder="Search all JRE podcasts..."
                style={styles.inputStyle}
                />
                <label>{filteredVideos.length} found</label>
              </div>
            </div>
        </div>
        <div className="container">
          <ul className="row">
              {filteredVideos.map(function(result) {
                return (
                  <LazyLoad offset={100}  key={result.position}>
                    <VideoItem video={result} setFeaturedVideo={actions.setFeaturedVideo} />
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
