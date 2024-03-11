import React, { useState } from 'react'
import PostItem from '../component/PostItem.jsx'
import {POSTS} from '../data.js'

function Posts() {

    const [posts, setPosts] = useState(POSTS);

    return (
        <section className='posts'>
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

export default Posts