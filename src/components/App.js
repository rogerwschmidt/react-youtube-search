import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const API_KEY = process.env.REACT_APP_API_KEY

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  videoSearch (term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={term => videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

export default App
