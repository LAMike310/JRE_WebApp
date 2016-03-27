import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TextFilter from 'react-text-filter'
import LazyLoad from 'react-lazyload'

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
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
    let list = ["1", "2"]
    return (
      <div className="row">
        <div className="container">
          <input  className="col s6 offset-s3 searchBox" type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="Type here" />
        </div>
        {this.props.videos[0].title}
        <div className="container">
          <ul className="row">

              {videos.map(function(result) {
                return (
                  <LazyLoad offset={100}  key={result.position}>
                  <li className="col m6">
                      <div className="card">
                        <div className="card-image">

                        <img src={`https://i.ytimg.com/vi/${result.videoID}/hqdefault.jpg`} className="responsive-img" alt=""/>
                        </div>
                        <div className="card-content">
                          <p>{result.title}</p>
                        </div>
                        <div className="card-action">
                          <a href="#">Watch</a>
                        </div>
                      </div>
                  </li>
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
