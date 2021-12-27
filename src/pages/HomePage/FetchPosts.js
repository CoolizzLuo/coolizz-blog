import { useContext, useState, useEffect, useMemo, useRef } from 'react'

import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../context'
import PageBar from '../../components/PageBar'


library.add(fab)

const PostContainer = styled.article`
  position: relative;
  background: #fff;
  padding: 1.4rem 1.6rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);

  /* & + & {
    border-top: 1px solid rgba(0, 12, 34, 0.2);
  } */
`

const PostHead = styled.header`
  width: 100%;
  text-align: left;
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
`

const PostBody = styled.section`
  font-size: .8rem;
  margin: 1rem 0;
`

const PostTitle = styled(Link)`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: #428bca;
  text-decoration: none;
  overflow: hidden;
`

const PostInfo = styled.div`
  display: flex;
  font-size: .6rem;
  padding: .4rem 0;

  path, span {
    color: #aaa;
  }

  svg {
    margin-right: .2rem;
  }

  span {
    margin-right: .8rem;
  }
`

const PostAuthor = styled.span`
  font-weight: 500;
`

const PostDate = styled.span`
`

const PostTag = styled.span`

`

const ReadMoreBtn = styled(Link)`
  position: absolute;
  right: 1.6rem;
  bottom: 1.4rem;
  font-size: .6rem;
  color: #338ccc;
`

const Post = ({ post, userList }) => {
  const { id, title, body, userId, createdAt } = post
  const postBody = body.split('\n').slice(0, 2).join(' ')

  const timeParser = (time) => new Date(createdAt).toLocaleString('zh-TW', { hour12: false })
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
            Test
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

const FetchPosts = () => {
  const { userList } = useContext(AuthContext)
  const { loading, error, data = [] } = useFetch(`https://student-json-api.lidemy.me/posts?_sort=createdAt&_order=desc`)
  // const { loading, error, data } = useFetch(`https://student-json-api.lidemy.me/posts?_page=${page}&_limit=5&_sort=createdAt&_order=desc`)
  const toastId = useRef(null)
  const [currPage, setCurrPage] = useState(1)
  const maxPage = useMemo(() => Math.ceil(data.length / 5), [data])
  const pageData = useMemo(() => {
    return data.slice((currPage - 1) * 5, currPage * 5)
  }, [data, currPage])



  useEffect(() => {
    loading ? (toastId.current = toast.loading('loading...')) : toast.dismiss(toastId.current)
    return () => toast.dismiss(toastId.current)
  }, [loading])

  useEffect(() => {
    if (error) toast.error('Network error')
  }, [error])

  return (
    <>
      {data && pageData.map(post => <Post key={post.id} post={post} userList={userList} />)}
      <PageBar count={10} currPage={currPage} setCurrPage={setCurrPage} />
    </>
  )
}

export default FetchPosts
