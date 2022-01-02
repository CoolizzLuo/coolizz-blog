import { useContext, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import styled from '@emotion/styled'
import { toast } from 'react-toastify'

import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../context'
import { timeParser } from '../../utils'


const Table = styled.table`
  width: 100%;
  text-align: center;

  tr {
    display: flex;
  }

  tr + tr {
    border-top: 2px solid #666;
  }
  
  th, td {
    ${({ col }) => col && `
      width: calc(100%/${col});
    `}
    
  }

  th {
    background: #428bca;
    color: #FFF;
    padding: 8px 0;
  }

  td {
    padding: 4px 0;
  }

  th:first-type {
    
  }

  .left {
    text-align: left;
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
      <Table col={4}>
        <thead>
          <tr>
            <th>文章序號</th>
            <th>文章標題</th>
            <th>發布日期</th>
            <th>管理</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td className="left">{post.title}</td>
                <td>{timeParser(post.createdAt)}</td>
                <td><button>刪除</button></td>
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
