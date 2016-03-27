import axios from 'axios'
import _ from 'lodash'
let actions = {
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
