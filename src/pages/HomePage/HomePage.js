import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getPosts } from '../../WebAPI'


const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`

const PostContainer = styled.div`
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const PostTitle = styled(Link)`
  font-size: 24px;
  color: #333;
  text-decoration: none;
`
const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
`

const Post = ({ post }) => {
  return (
    <PostContainer>
      <PostTitle to={`/post/${post.id}`}>{post.title}</PostTitle>
      <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
    </PostContainer>
  )
}

Post.propTypes = {
  post: PropTypes.object
}

export default function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(setPosts)
  }, []);

  return (
    <Root>
      {posts.map(post => <Post key={post.id} post={post} />)}
    </Root>
  )
}