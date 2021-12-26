import { useEffect, useRef } from 'react'

import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { toast, ToastContainer } from 'react-toastify'


const PostContainer = styled.div`
  padding: 1.4rem .6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  & + & {
    border-top: 1px solid rgba(0, 12, 34, 0.2);
  }
`

const PostTitle = styled(Link)`
  font-size: 1rem;
  font-weight: 700;
  color: #d04444;
  text-decoration: none;
  overflow: hidden;
`

const PostBody = styled.div`
  font-size: .8rem;
  margin: 1rem 0;
`

const PostInfo = styled.div`
  display: flex;
  font-size: .7rem;
`

const PostAuthor = styled.div`
  color: #d04444;
  font-weight: 500;
`

const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
  margin-left: .2rem;
`

const Post = ({ post }) => {
  const { id, title, body, userId, createdAt } = post
  const postBody = body.split('\n').slice(0, 2).join(' ')
  return (
    <PostContainer>
      <PostTitle to={`/post/${id}`}>{title}</PostTitle>
      <PostBody>{postBody.length > 30 ? `${postBody.substr(0, 30)}...` : postBody}</PostBody>
      <PostInfo>
        <PostAuthor>{userId}</PostAuthor>
        <PostDate>{' on ' + new Date(createdAt).toLocaleDateString()}</PostDate>
      </PostInfo>
    </PostContainer>
  )
}

const FetchPost = ({ id }) => {
  const { loading, error, data } = useFetch(`https://student-json-api.lidemy.me/posts/${id}`)
  const toastId = useRef(null)

  useEffect(() => {
    loading ? (toastId.current = toast.loading('loading...')) : toast.dismiss(toastId.current)
    return () => toast.dismiss(toastId.current)
  }, [loading])

  useEffect(() => {
    if (error) toast.error('Network error')
  }, [error])

  return (
    <div>
      {console.log(data)}
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
    </div>
  )
}

export default FetchPost
