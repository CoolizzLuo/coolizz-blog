import { useParams } from 'react-router-dom'

import styled from '@emotion/styled'
import Modal from '../../components/Modal'
import FetchPost from './FetchPost'


const Wrapper = styled.div`
  position: relative;
  font-size: .8rem;
  width: 400px;
  padding: 1.5rem 1.25rem 1.25rem;
  margin: 3rem 0 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
`

const PostPage = () => {
  const { id } = useParams()
  return (
    <Modal>
      <Wrapper>
        <FetchPost id={id} />
      </Wrapper>
    </Modal>
  )
}

export default PostPage
