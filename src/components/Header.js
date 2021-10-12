import { useContext } from 'react'
import styled from "@emotion/styled/macro";
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../context'
import { setAuthToken } from '../utils'


const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0px 32px;
  box-sizing: border-box;
`

const Brand = styled(Link)`
  font-size: 32px;
  font-weight: 700;
`

const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 64px;

`

const Nav = styled(NavLink, {
  activeClassName: 'active',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  width: 100px;
  cursor: pointer;
  color: #000;
  text-decoration: none;

  &.active {
    background: rgba(0, 0, 0, 0.1);
  }
`

// &.${({activeClassName}) => activeClassName} {
//   background: rgba(0, 0, 0, 0.1);
// }

const Header = ({ history }) => {
  const location = useLocation()
  const { pathname } = location
  const { user, setUser } = useContext(AuthContext)
  const handleLogout = () => {
    setAuthToken('')
    setUser(null)
    if (pathname !== '/') history.push('/')
  }

  return (
    <HeaderContainer>
      <Brand to="/">我的第一個部落格</Brand>
      <NavbarList>
        <Nav exact to="/">首頁</Nav>
        <Nav to="/new_post">發布文章</Nav>
        <Nav to="/about">關於我</Nav>
        <Nav to="/login">登入</Nav>
        <Nav to="/" onClick={handleLogout}>登出</Nav>
      </NavbarList>
    </HeaderContainer>
  )
}

export default Header