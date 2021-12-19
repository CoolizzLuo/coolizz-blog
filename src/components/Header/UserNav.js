import { useContext } from 'react'
import styled from '@emotion/styled/macro';
import ModalForm from './ModalForm/ModalForm';
import useToggle from '../../hooks/useToggle';
import Modal from '../Modal';
import { toast } from 'react-toastify'
import { AuthContext } from '../../context'
import { clearAuthToken } from '../../utils'


const Button = styled.button`
  font-size: .8rem;
  padding: 2px 8px;
  /* background-color: #a29bfe; */
  background-color: #1877f2;
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

const Form = ({ handleToggle }) => {
  return (
    <Modal>
      <ModalForm handleToggle={handleToggle} />
    </Modal>
  )
}

const UserNav = () => {
  const [isModalOpen, toggleModal] = useToggle()
  const { user, setUser } = useContext(AuthContext)
  const handleLogout = () => {
    clearAuthToken()
    setUser(null)
    toast.warning('Logout success !')
  }
  return (
    <>
      {isModalOpen && <Form handleToggle={toggleModal} />}
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