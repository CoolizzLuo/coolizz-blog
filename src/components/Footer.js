import styled from '@emotion/styled/macro'


const FooterContainer = styled.footer`
  font-size: .8rem;
  padding: 16px 0 16px;
  text-align: center;
  
  a {
    font-style: italic;
    color: #74b9ff;
  }
`

const Footer = () => (
  <FooterContainer>
    &copy; copyright 2021 by <a href={`mailto:duenzo1010@gmail.com`}>Enzo</a>
  </FooterContainer>
)


export default Footer
