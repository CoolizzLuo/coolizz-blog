import { useContext, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import styled from '@emotion/styled'
import { toast } from 'react-toastify'

import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../context'
import { timeParser, userParser } from '../../utils'
import axios from '../../commons/axios'


const Table = styled.table`
  font-size: .8rem;
  width: 100%;
  text-align: center;
  border: 1px solid #111;

  tr {
    /* display: flex; */
  }

  tr + tr {
    border-top: 2px solid #666;
  }
  
  th, td {
    border: 1px solid #111;
    /* ${({ col }) => col && `
      width: calc(100%/${col});
    `} */
  }

  th {
    background: #428bca;
    color: #FFF;
    padding: 8px 0;
  }

  td {
    padding: 4px 0;
  }
`

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

const ConsolePage = () => {
  const { userList } = useContext(AuthContext)
  const history = useHistory()
  const toastId = useRef(null)
  const { loading, error, data = [] } = useFetch(`https://student-json-api.lidemy.me/posts?_sort=createdAt&_order=desc`)
  const handleDeletePost = async (id) => {

    toast.promise(
      axios.delete(`/posts/${id}`),
      {
        pending: 'Loading...',
        success: {
          render({ data }) {
            history.go(0)
            return 'Delete Successful !'
          }
        },
        error: {
          render({ data }) {
            return 'Delete Fail !'
          }
        }
      }, { autoClose: 3000 }
    )
  }


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
      <Table col={5}>
        <thead>
          <tr>
            <th>No.</th>
            <th>文章標題</th>
            <th>作者</th>
            <th>發布日期</th>
            <th>管理</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(({ id, title, userId, createdAt }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{title.length < 8 ? title : `${title.substring(0, 8)}...`}</td>
                <td>{userParser(userList, userId)?.username.substring(0, 8)}</td>
                <td>{timeParser(createdAt)}</td>
                <td>
                  <button onClick={() => handleDeletePost(id)}>刪除</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>

      {/* {data.map(post => <Post key={post.id} post={post} userList={userList} />)} */}
    </>
  )
}

export default ConsolePage
