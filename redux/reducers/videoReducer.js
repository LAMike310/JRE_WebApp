let videoReducer = function reducer(videos = [], action) {
  switch (action.type) {
    case 'DISPLAY_VIDEOS':
      return videos = action.videos
    case 'SET_FEATURED_VIDEO':
      console.log("SETTING VIDEO");
      return videos
    default:
      return videos
  }
}
export default videoReducer
