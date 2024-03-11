import React from 'react'
import PostAuthor from '../component/PostAuthor.jsx'
import { Link } from 'react-router-dom'

function PostItem({ postId, category, thumbnail, title, body, authodId }) {

const shortBody = body.length > 145 ?  body.substr(0, 145) + '...' : body;
const shortTitle = title.length > 30 ?  title.substr(0, 30) + '...' : title;


  return (
    <article className='post'>
      <div className='post__thumbnail'>
        <img src={thumbnail} alt={shortTitle} />
      </div>
      <div className='post__content'>
        <Link to={`/posts/${postId}`} >
          <h3>{shortTitle}</h3>
        </Link>
        <p>{shortBody}</p>
        <div className="post__footer">
          <PostAuthor />
          <Link className='btn category' to={`posts/categories/${category}`}>{category}</Link>
        </div>
      </div>
    </article>
  )
}

export default PostItem
