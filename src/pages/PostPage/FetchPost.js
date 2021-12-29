import { useContext, useEffect, useRef } from 'react'

import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../context'
import {
  PostContainer,
  PostHead,
  PostBody,
  PostTitle,
  PostInfo,
  PostAuthor,
  PostDate,
  PostTag,
} from '../../styles/PostStyle'


library.add(fab)

const Post = ({ post, userList }) => {
  const { id, title, body, userId, createdAt } = post
  const timeParser = (time) => new Date(time).toLocaleString('zh-TW', { hour12: false })
  const userParser = (userId) => userList.find((user) => user.id === userId)

  return (
    <PostContainer>
      <PostHead>
        <PostTitle to={`/post/${id}`}>{title}</PostTitle>
        <PostInfo>
          <PostDate>
            <FontAwesomeIcon icon={faCalendarAlt} />
            {timeParser(createdAt)}
          </PostDate>
          <PostAuthor>
            <FontAwesomeIcon icon={faUserAlt} />
            {userParser(userId)?.username}
          </PostAuthor>
          <PostTag>
            <FontAwesomeIcon icon={faTags} />
            Lidemy Student
          </PostTag>
        </PostInfo>
      </PostHead>
      <PostBody>
        {body}
      </PostBody>
    </PostContainer>
  )
}

const FetchPost = ({ id }) => {
  const { userList } = useContext(AuthContext)
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
    !loading && <Post post={data} userList={userList} />
  )
}

export default FetchPost
