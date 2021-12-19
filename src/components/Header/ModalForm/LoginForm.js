import { useContext } from 'react'
import styled from '@emotion/styled/macro';
import decode from 'jwt-decode'
import axios from '../../../commons/axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../context'
import { setAuthToken } from '../../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


library.add(fab)


const H2 = styled.h2`
  margin: 2rem 0 0;
  text-align: center;
`

const Form = styled.form`
  margin: 1.5rem 0 1rem;
`

const InputField = styled.div`
  position: relative;
  width: 100%;
  margin: .75rem 0 .75rem;
`

const InputLabel = styled.div`
  font-size: .85rem;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: .5rem .7rem;
  color: #aaa;
  transition: transform 0.1s;
  pointer-events: none;
`

const Input = styled.input`
  font-size: .9rem;
  width: 100%;
  border: 1px #dbdbdb solid;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: .4rem .7rem .4rem;
  margin: 0 0 .6rem;
  outline: none;
  letter-spacing: 0.5px;
  background: #f1f5ff;
  color: #363636;
  box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);

  &:placeholder-shown::placeholder {
    color: transparent;
  }

  &:focus {
    border-bottom-color: #333;
    box-shadow: 1px 1px 1px #ccc;
  }

  &:focus + ${InputLabel}, &:not(:placeholder-shown) + ${InputLabel} {
    color: #757575;
    transform: scale(0.85) translate(-20px, -36px);
  }

  ${({ $danger }) => $danger && `
    border-color: #f02849 !important;
  `}
`

const ErrorMsg = styled.p`
  font-size: .75rem;
  position: absolute;
  bottom: -.5rem;
  width: 100%;
  text-align: right;
  color: #f02849;
  font-weight: 300;
`

const FontAwesomeEye = styled(FontAwesomeIcon)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
const PasswordCheckWrapper = styled.div`
  transition: 0.2s opacity;
  opacity: 0;
  display: flex;
  align-items: center;
  font-size: 12px;
  ${(props) => props.$active && `opacity: 1;`}
`
const PasswordCheck = styled.p`
  margin: 0px 15px 0px 5px;
  color: #ababab;
  ${(props) => props.$checked && `color: #000000;`}
`

const SubmitBtn = styled.button`
  font-size: .9rem;
  padding: .3rem 1rem;
  width: 100%;
  margin-top: .5rem;
  /* background-color: #a29bfe; */
  background-color: #1877f2;
  border-color: transparent;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #666;
  color: #fff;
  cursor: pointer;
  transition: all .3s;

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`

const Note = styled.div`
  display: flex;
  justify-content: center;
  p {
    color: #aaa;
  }

  button {
    font-weight: 900;
    color: #1877f2;
    background: transparent;
    margin-left: 10px;
    border: none;
    cursor: pointer;
  }
`

const LoginForm = ({ toggleModal, switchForm }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { setUser } = useContext(AuthContext)

  const onSubmit = async (data) => {
    const { username, password } = data

    toast.promise(
      axios.post('/login', { username, password }),
      {
        pending: 'Login...',
        success: {
          render({ data }) {
            if (data.data?.ok !== 1) return data.data.message
            const { token } = data.data
            const { username } = decode(token)
            setAuthToken(token)
            setUser(username)
            toggleModal()
            return `Hi, ${username} welcome` || 'Login success 👌'
          }
        },
        error: {
          render({ data }) {
            reset()
            return data.response.data?.message || 'Login rejected 🤯'
          }
        }
      }
    )
  }

  return (
    <>
      <H2>Log into Blog</H2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField>
          <Input
            type="text"
            placeholder="Username"
            $danger={errors.username}
            {...register(
              "username",
              { required: 'username is required' }
            )}
          />
          <InputLabel children='Username' />
          {errors.username && <ErrorMsg>{errors.username.message}</ErrorMsg>}
        </InputField>
        <InputField>
          <Input
            type="current-password"
            placeholder="password"
            $danger={errors.password}
            {...register(
              "password",
              {
                required: 'password is required',
                minLength: {
                  value: 6,
                  message: 'cannot be less than 6 digits'
                }
              }
            )}
          />
          <InputLabel children='password' />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          {/* <PasswordCheckWrapper $active={password}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                size='sm'
                color={password.length > 7 ? '#4AE7A5' : '#ABABAB'}
              />
              <PasswordCheck $checked={password.length > 7}>
                8 Characters min.
              </PasswordCheck>
              <FontAwesomeIcon
                icon={faCheckCircle}
                size='sm'
                color={/[0-9]/.test(password) ? '#4AE7A5' : '#ABABAB'}
              />
              <PasswordCheck $checked={/[0-9]/.test(password)}>
                One number
              </PasswordCheck>
            </PasswordCheckWrapper> */}
        </InputField>
        <SubmitBtn>Log In</SubmitBtn>
      </Form>
      <Note>
        <p>Don't have an account?</p>
        <button onClick={switchForm} >Sign up</button>
      </Note>
    </>
  )
}

export default LoginForm