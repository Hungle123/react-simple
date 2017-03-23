import React, { Component } from 'react';
class VideoListItem extends Component {
  render() {
    const video = this.props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    const onVideoSelect = this.props.onVideoSelect;
    return (
      <li className="list-group-item" onClick={()=> onVideoSelect(video)} >
        <div className="video-list-media">
          <div className="media-left">
            <img src={imageUrl} alt="" className="media-object"/>
          </div>        

          <div className="media-boby">
            <div className="media-heading">{title}</div>
          </div>  
        </div>
      </li>
    );
  }
}

export default VideoListItem;