import { useContext, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import styled from '@emotion/styled'
import { toast } from 'react-toastify'

import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../context'

const Container = styled.div`
  margin: 2rem auto 0;
  padding: 2rem;
  font-size: calc(20px + 0.33vw);
  text-align: left;
`

const Table = styled.table``

const Thead = styled.thead``
const Tbody = styled.tbody``
const Tr = styled.tr``
const Td = styled.td``

const Div = styled.div`
  text-align: left;
`


const Post = ({ post }) => {


  return (
    <Div>
      <span>{post.title}</span>
      <button>刪除</button>
    </Div>
  )
}

const ConsolePage = ({ defaultPage = 1 }) => {
  const { userList } = useContext(AuthContext)
  const history = useHistory()
  const toastId = useRef(null)
  const { loading, error, data = [] } = useFetch(`https://student-json-api.lidemy.me/posts?_sort=createdAt&_order=desc`)

  useEffect(() => {
    loading ? (toastId.current = toast.loading('loading...')) : toast.dismiss(toastId.current)
    return () => toast.dismiss(toastId.current)
  }, [loading])

  useEffect(() => {
    if (error) toast.error('Network error')
  }, [error])

  return (
    !loading &&
    <>
      {data.map(post => <Post key={post.id} post={post} userList={userList} />)}
    </>
  )
}

export default ConsolePage
