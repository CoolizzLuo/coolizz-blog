import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  max-width: 1200px;
`

const Container = styled.div`
  text-align: center;
  height: calc(100vh - 204px);
  overflow: auto;
  padding: 2rem 1rem;
  margin: 24px 0;
`


const Layout = ({ children }) => {

  return (
    <Wrapper>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </Wrapper>
  )
};

export default Layout;