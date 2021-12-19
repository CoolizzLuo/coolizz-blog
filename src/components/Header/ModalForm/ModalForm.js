import { useState } from 'react'
import styled from '@emotion/styled/macro';
import useToggle from '../../../hooks/useToggle';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


library.add(fab)

const Wrapper = styled.div`
  position: relative;
  font-size: .8rem;
  width: 350px;
  padding: 1.5rem 1.25rem 1.25rem;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
`

const BackBtn = styled.div`
  font-size: .6rem;
  position: absolute;
  cursor: pointer;
  & span {
    margin-left: 10px;
  }
  top: 0;
  left: 0;
  @media screen and (min-width: 768px) {
    top: 32px;
    left: 31px;
  }
  &:hover {
    font-weight: bold;
    border-bottom: 2px solid #3c71ff;
  }
`


const ModalForm = ({ handleToggle }) => {
  const [isLoginForm, toggleForm] = useToggle(true)

  return (
    <Wrapper>
      <BackBtn onClick={handleToggle}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </BackBtn>
      {
        isLoginForm ?
          <LoginForm toggleModal={handleToggle} switchForm={toggleForm} /> :
          <RegisterForm toggleModal={handleToggle} switchForm={toggleForm} />
      }

    </Wrapper>
  )
}

export default ModalForm
