import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'
function PostAuthor() {
  return (
    <Link to={`/posts/users/:id`} className='post__author'>
      <div className="post-author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post-author-details">
        <h5>By: Ernest Achiever</h5>
        <small>Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor