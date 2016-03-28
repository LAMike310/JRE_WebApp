import axios from 'axios'
import _ from 'lodash'
let actions = {
  updateLoadingState: function(loadingState){
    return {
      type: 'SET_LOADING_STATE',
      loadingState
    }
  },
  setFeaturedVideo: function(video, id){
    console.log("video", video);
    return {
      type: 'SET_FEATURED_VIDEO',
      video: video.videoID + "?autoplay=" + id
    }
  },
  displayVideos: function(videos){
    return {
      type: 'DISPLAY_VIDEOS',
      videos
    }
  },
  getVideos: function(){
    return (dispatch) => {
      axios.get('https://joerogan.firebaseio.com/videos.json')
      .then(function (response) {
        var data = response.data
        dispatch(actions.displayVideos(data))
        console.log(response.data);
      })
      .catch(function (response) {
        console.log("Error! " + response);
      });
    }
  }
}

export default actions
