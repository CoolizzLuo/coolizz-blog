import { useState, useEffect } from 'react'

import { getPosts } from '../WebAPI'
import FetchPosts from './HomePage/FetchPosts'


const HomePage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(setPosts)
  }, []);

  return (
    <>
      <FetchPosts />
    </>
  )
}

export default HomePage