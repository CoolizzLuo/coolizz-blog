import { useEffect, useRef } from 'react'

import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { toast, ToastContainer } from 'react-toastify'


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
  overflow: hidden;
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

const FetchPosts = () => {
  const { loading, error, value } = useFetch(`https://student-json-api.lidemy.me/posts?_sort=createdAt&_order=desc`)
  const toastId = useRef(null)

  useEffect(() => {
    loading ? (toastId.current = toast.loading('loading...', { position: 'top-center' })) : toast.dismiss(toastId.current)
  }, [loading])

  return (
    <>

      {value && value.map(post => <Post key={post.id} post={post} />)}
    </>
  )
}

export default FetchPosts
