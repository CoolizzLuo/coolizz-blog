import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'

const Wrapper = styled.div`

`

const Container = styled.div`
  text-align: center;
  height: calc(100vh - 96px);
  width: 70%;
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