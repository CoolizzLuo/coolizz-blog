import { useContext, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import styled from '@emotion/styled/macro'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import useFetch from '../../hooks/useFetch'
import usePagination from '../../hooks/usePagination'
import Pagination from '../../components/Pagination'
import { AuthContext } from '../../context'
import {
  PostContainer as Container,
  PostHead,
  PostBody,
  PostTitle,
  PostInfo,
  PostAuthor,
  PostDate,
  PostTag,
  ReadMoreBtn
} from '../../styles/PostStyle'


library.add(fab)

const PostContainer = styled(Container)`
  margin: 2rem 0;
`

const PostBodyEllipsis = styled(PostBody)`
  width: 100%;  
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  box-orient: vertical;
  -webkit-box-orient: vertical;
`

const Post = ({ post, userList }) => {
  const { id, title, body, userId, createdAt } = post
  const postBody = body.split('\n').slice(0, 2).join(' ')

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
      <PostBodyEllipsis>
        {/* {postBody.length > 30 ? `${postBody.substr(0, 30)}...` : postBody} */}
        {postBody}
      </PostBodyEllipsis>
      <ReadMoreBtn to={`/post/${id}`}>Read More</ReadMoreBtn>
    </PostContainer>
  )
}

const FetchPosts = ({ defaultPage = 1 }) => {
  const { userList } = useContext(AuthContext)
  const history = useHistory()
  const toastId = useRef(null)
  const { loading, error, data = [] } = useFetch(`https://student-json-api.lidemy.me/posts?_sort=createdAt&_order=desc`)
  const { currPage, setCurrPage, totalPage, pageData } = usePagination(data, defaultPage)

  useEffect(() => {
    loading ? (toastId.current = toast.loading('loading...')) : toast.dismiss(toastId.current)
    return () => toast.dismiss(toastId.current)
  }, [loading])

  useEffect(() => {
    if (error) toast.error('Network error')
  }, [error])

  useEffect(() => {
    if (!totalPage) return
    if (defaultPage > totalPage || defaultPage < 1) {
      toast.error('Maximum number of pages exceeded', { position: "top-right", autoClose: 2000, hideProgressBar: true })
      setCurrPage(1)
    }
  }, [defaultPage, totalPage, setCurrPage])

  useEffect(() => history.push('/?page=' + currPage), [history, currPage])

  return (
    !loading &&
    <>
      {pageData.map(post => <Post key={post.id} post={post} userList={userList} />)}
      <Pagination
        totalPage={totalPage}
        currentPage={currPage}
        setCurrentPage={setCurrPage}
        siblingCount={0}
      />
    </>
  )
}

export default FetchPosts
