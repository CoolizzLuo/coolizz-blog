import { useContext, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'

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
  PostContainer,
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
      <PostBody>
        {postBody.length > 30 ? `${postBody.substr(0, 30)}...` : postBody}
      </PostBody>
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

  useEffect(() => history.push('/' + currPage), [history, currPage])

  useEffect(() => {
    if (!totalPage) return
    if (defaultPage > totalPage || defaultPage < 1) {
      toast.error('Maximum number of pages exceeded')
      history.push('/1')
    }
  }, [defaultPage, totalPage, history])

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
