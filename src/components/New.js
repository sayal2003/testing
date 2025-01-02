import React, { useEffect, useState } from 'react'
import Card from './Card'
import moment from 'moment'

const New = ({articles }) => {
  return (
    <div className="news-container">  
      <h1>News</h1>
      <div className="card-list">
        {articles.map((value, index) => (
          <Card
            index={index}
            title={value.title}
            description={value.description}
            // content={value.content}
            author={value.author}
            src={value.urlToImage}
            url={value.url}
            publishedAt={moment(value.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
          />
        ))}
      </div>
    </div>
  )
}

export default New;
