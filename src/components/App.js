import styled from 'styled-components';
import Router from './Router';
import Header from './Header'


const Root = styled.div`
  padding-top: 64px;
`

export default function App() {
  return (
    <Root>
      <Router>
        <Header/>
      </Router>
    </Root>
  )
}