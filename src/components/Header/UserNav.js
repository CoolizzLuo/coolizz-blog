import { useContext } from 'react'
import styled from "@emotion/styled/macro";
import LoginModal from './LoginModal';
import useToggle from '../../hooks/useToggle';
import { useLocation, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context'
import { clearAuthToken } from '../../utils'


const Button = styled.button`
  font-size: .8rem;
  padding: 2px 8px;
  background-color: #a29bfe;
  border-color: transparent;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #666;
  margin-left: 8px;
  color: #fff;
  cursor: pointer;
  transition: all .3s;

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`

const UserNav = () => {
  const [isModalOpen, toggleModal] = useToggle()
  const { history } = useHistory()
  const { pathname } = useLocation()
  const { user, setUser } = useContext(AuthContext)
  const handleLogout = () => {
    clearAuthToken()
    setUser(null)
    if (pathname !== '/') history.push('/')
  }
  return (
    <>
      {isModalOpen && <LoginModal handleToggle={toggleModal} />}
      {
        !user ? (
          <Button onClick={toggleModal}>login</Button>
        ) : (
          <div>
            <span>{'Hi ' + user?.username}</span>
            <Button onClick={handleLogout}>log out</Button>
          </div>
        )
      }
    </>
  )
}

export default UserNav