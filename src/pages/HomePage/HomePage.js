import { useParams } from 'react-router'

import styled from '@emotion/styled'

import FetchPosts from './FetchPosts'


const Wrapper = styled.div`
  width: 100%;
  padding: 0 .5rem;
`

const HomePage = () => {
  const { page } = useParams()

  return (
    <Wrapper>
      <FetchPosts defaultPage={page} />
    </Wrapper>
  )
}

export default HomePage
