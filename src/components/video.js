import React from 'react';
import './video.scss';

export default function Video({ url, title }) {
  return (
    <div className="video">
      <iframe
        width="700" 
        height="400"
        src={url}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        frameborder="0"
      />
    </div>
  );
}
