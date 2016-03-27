let filterReducer = function reducer(videos = [], action) {
  switch (action.type) {
    case 'FILTER_LIST':
      console.log(videos);
      return videos
    default:
      return videos
  }
}
export default filterReducer
