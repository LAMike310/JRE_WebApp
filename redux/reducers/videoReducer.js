let videoReducer = function reducer(videos = [], action) {
  switch (action.type) {
    case 'DISPLAY_VIDEOS':
      return videos = action.videos
    default:
      return videos
  }
}
export default videoReducer
