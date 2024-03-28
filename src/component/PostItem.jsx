import React from 'react'
import PostAuthor from '../component/PostAuthor.jsx'
import { Link, useParams } from 'react-router-dom'

function PostItem({ postId, category, thumbnail, title, body, authorId, createdAt }) {

  const shortBody = body.length > 145 ? body.substr(0, 145) + '...' : body;
  const shortTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;


  return (
    <article className='post'>
      <div className='post__thumbnail'>
        <img src={`${import.meta.env.VITE_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={shortTitle} />
      </div>
      <div className='post__content'>
        <Link to={`/posts/${postId}`} >
          <h3>{shortTitle}</h3>
        </Link>
        <p dangerouslySetInnerHTML={{__html: shortBody}}/>
        <div className="post__footer">
          <PostAuthor authorId={authorId} createdAt={createdAt} />

          <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>

        </div>
      </div>
    </article>
  )
}

export default PostItem
