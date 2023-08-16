import React from 'react';
import './imageWrapper.scss';

export default function ImageWrapper({ children }) {
  return (
    <div className="image-wrapper">
      {children}
    </div>
  )
}
