import { useState, useEffect } from 'react'

import styled from '@emotion/styled'

import { getPosts } from '../../WebAPI'
import FetchPosts from './FetchPosts'


const Wrapper = styled.div`
  width: 100%;
`

const HomePage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // getPosts().then(setPosts)
  }, []);

  return (
    <Wrapper>
      <FetchPosts />
    </Wrapper>
  )
}

export default HomePage
