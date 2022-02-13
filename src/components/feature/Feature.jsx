import React from 'react';
import './feature.css';

function Feature({ title, text }) {
  return (
    <div className="features-container_feature" id='features'>
      <div className="features-container_feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature