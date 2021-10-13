import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
`

const Container = styled.div`
  text-align: center;
  height: calc(100vh - 140px);
  width: 100%;
  overflow: auto;
  padding: 2rem 1rem;
`


const Layout = ({ children }) => {
  
  return (
    <Wrapper>
      <Header/>
      <Container>
        { children }
      </Container>
      <Footer/>
    </Wrapper>
  )
};

export default Layout;