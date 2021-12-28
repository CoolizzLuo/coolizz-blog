import styled from '@emotion/styled'


const Container = styled.div`
  margin: 2rem auto 0;
  padding: 2rem;
  font-size: calc(20px + 0.33vw);
  text-align: left;
`

const AboutPage = () => {
  return (
    <Container>
      <h1>Hello</h1>
      <h3>我是 Enzo</h3>
      <p>目前一是名系統維運工程師，興趣是 Coding</p>
      <p>我計畫在年後轉職成軟體開發工程師</p>
      <p>這邊以後可能會轉型成我專屬的技術部落格. hope so</p>
    </Container>
  )
}

export default AboutPage