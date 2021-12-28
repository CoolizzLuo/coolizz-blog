import { useParams } from 'react-router-dom'


import FetchPost from './FetchPost'


const PostPage = () => {
  const { id } = useParams()
  return (
    <>
      <FetchPost id={id} />
    </>
  )
}

export default PostPage
