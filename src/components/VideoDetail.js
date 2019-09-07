/* eslint-disable react/prop-types */
import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return 'loading';
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&enable_js=1`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video-player" src={videoSrc} allow="autoplay" allowFullScreen />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
