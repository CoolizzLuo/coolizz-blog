import { useContext } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'

import styled from '@emotion/styled'
import Modal from '../../components/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { AuthContext } from '../../context'
import Post from './Post'
import FetchPost from './FetchPost'


library.add(fab)

const Container = styled.div`
  display: flex;
  position: relative;
  font-size: .8rem;
  min-height: 300px;
  max-height: calc(100vh - 100px);
  width: 768px;
  padding: 0rem 1.25rem;
  margin: 4rem 0 0;
  border-radius: 10px;
  background: #eee;
  /* box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%); */
`

const CloseBtn = styled(Link)`
  position: absolute;
  top: 0rem;
  right: .5rem;
  font-size: 1.4rem;
  transition: all .2s;
  cursor: pointer;
  path {
    color: #333;

    &:hover {
      color: #ccc;
    }
  }
`

const PostPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const location = useLocation()
  const { userList } = useContext(AuthContext)

  return (
    <Modal>
      <Container>
        {console.log(history)}
        <CloseBtn to='/'>
          <FontAwesomeIcon icon={faTimes} />
        </CloseBtn>
        {location.state?.post ? <Post post={location.state.post} userList={userList} /> : <FetchPost postId={id} />}
      </Container>
    </Modal >
  )
}

export default PostPage
