
import styled from "@emotion/styled/macro";
import { NavLink } from 'react-router-dom'
import UserNav from './UserNav';



const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const NavbarList = styled.div`
  display: flex;
`

const Nav = styled(NavLink, {
  activeClassName: 'active',
})`
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 2px 12px;
  border-radius: 8px;
  cursor: pointer;
  color: #999;
  text-decoration: none;

  & + & {
    margin-left: 6px;
  }
  &.active {
    color: #000;
  }
  &:hover {
    color: #444;
    background: #ddd;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <NavbarList>
        <Nav exact to="/">Home</Nav>
        <Nav to="/new_post">Post</Nav>
        <Nav to="/about">About me</Nav>
      </NavbarList>
      <UserNav />
    </HeaderContainer>
  )
}

export default Header