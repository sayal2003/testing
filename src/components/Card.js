import React from 'react'
import image from "../image/sayalnews.webp"

const Card = ({title,description,author, src, url, publishedAt}) => {
    // console.log(title, "title====>");
    
    return (
        <div>
            <>
                <div className="card" style={{width:"18rem", height:"450px"}}>
                    {/* <h1>{index}</h1> */}
                    <img src={src?src:image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0, 40)}</h5>
                        {/* <h6 className='card-text'>{content}</h6> */}
                        <p className='card-text'>Author:{author}</p>
                        <p className="card-text">  {description?`${description.slice(0, 100)}...`: "news fake"}</p>
                        <b className="card-text">{publishedAt}</b><br/>
                        <a href={url} >read more</a>
                    </div>
                </div>
            </>
        </div>

    )
}

export default Card
