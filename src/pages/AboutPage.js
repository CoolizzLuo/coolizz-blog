import styled from '@emotion/styled'
import Layout from '../components/Layout'


const Container = styled.div`
  width: 80%;
  margin: 2rem auto 0;
  font-size: calc(20px + 0.33vw);
  text-align: left;
`

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <h1>Hello.</h1>
        <h3>My name is Enzo Luo.</h3>
        <p>I am an operator engineer and good at JavaScript.</p>
        <p>If you happen to speak Chinese, my Chinese name is (Luo Shih Jie). You can also find me on Twitter and Github.</p>
        <p>Outside of programming and helping my wife take care of our two kids, I enjoy video games, karaoke, sushi and collecting watches.</p>
      </Container>
    </Layout>
  )
}

export default AboutPage