import { useHistory, useParams } from 'react-router-dom'

import styled from '@emotion/styled'

import { getPosts } from '../../WebAPI'
import FetchPost from './FetchPost'


const PostPage = () => {
  const { history } = useHistory()
  const { id } = useParams()
  return (
    <>
      <FetchPost id={id} />
    </>
  )
}

export default PostPage
