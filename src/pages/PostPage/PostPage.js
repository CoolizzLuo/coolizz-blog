import { useParams } from 'react-router-dom'

import styled from '@emotion/styled'
import Modal from '../../components/Modal'
import useToggle from '../../hooks/useToggle'
import FetchPost from './FetchPost'


const Container = styled.div`
  display: flex;
  position: relative;
  font-size: .8rem;
  max-height: calc(100vh - 100px);
  width: 768px;
  padding: 0rem 1.25rem;
  margin: 3rem 0 0;
  border-radius: 10px;
  background: #eee;
  /* box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%); */
`

const PostPage = () => {
  const { id } = useParams()
  return (
    <Modal>
      <Container>
        <FetchPost id={id} />
      </Container>
    </Modal>
  )
}

export default PostPage
