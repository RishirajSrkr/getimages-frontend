import React, { useState } from 'react'
import {POSTS} from '../data.js'
import PostItem from '../component/PostItem.jsx'
function AuthorPosts() {
  const[posts, setPosts] = useState(POSTS);
  return (
    <section className='author-posts'>
    {posts.length > 0 ?
        <div className="container posts__container">
            {posts.map(({ id, thumbnail, category, description, title, authorId }) => (<PostItem key={id} postId={id} thumbnail={thumbnail} category={category} body={description} title={title} authorId={authorId} />))}
        </div>
        :
        <h2 className='center'>No Posts Found!</h2>
    }
</section>
  )
}

export default AuthorPosts