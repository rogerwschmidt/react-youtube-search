import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({ videos, onVideoSelect }) => (
  <ul className='col-md-4 list-group'>
    {
      videos.map(e =>
        (<VideoListItem
          onVideoSelect={onVideoSelect}
          key={e.etag}
          video={e}
        />)
      )
    }
  </ul>
)

export default VideoList
