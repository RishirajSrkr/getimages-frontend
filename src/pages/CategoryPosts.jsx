import React, { useEffect, useState } from 'react'
import PostItem from '../component/PostItem.jsx'
import axios from 'axios';
import Loader from '../component/Loader.jsx'
import { useParams } from 'react-router-dom';

function AuthorPosts() {

  const [posts, setPosts] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const { category } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {

        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/posts/categories/${category}`);

        setPosts(response.data)

      }

      catch (err) {
        console.log(err);
      }

      setIsLoading(false)
    }
    fetchPosts();

  }, [category])



  if (isloading) {
    return <Loader />
  }

  return (
    <section className='author-posts'>
      {posts?.length > 0 ?
        <div className="container posts__container">
          {posts.map(({ _id: id, thumbnail, category, description, title, creator: authorId, createdAt }) => (<PostItem key={id} postId={id} thumbnail={thumbnail} category={category} body={description} title={title} authorId={authorId} createdAt={createdAt} />))}
        </div>
        :
        <h2 className='center'>No Posts Found!</h2>
      }
    </section>
  )
}

export default AuthorPosts