import React from 'react';
import './article.css';


function Article({ imgUrl, date, title }) {
  return (
    <div className="article">
      <div className="article_image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="article_content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article