import { useContext } from 'react'
import styled from '@emotion/styled/macro';
import decode from 'jwt-decode'
import axios from '../../../commons/axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../context'
import { setAuthToken } from '../../../utils'


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
  margin: 1rem 0 1rem;
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

const RegisterForm = ({ toggleModal, switchForm }) => {
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
      <H2>Create an account</H2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField>
          <Input
            type="text"
            placeholder="Nickname"
            $danger={errors.nickname}
            {...register(
              "nickname",
              { required: 'nickname is required' }
            )}
          />
          <InputLabel children='Nickname' />
          {errors.nickname && <ErrorMsg>{errors.nickname.message}</ErrorMsg>}
        </InputField>
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
            type="password"
            placeholder="Password"
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
          <InputLabel children='Password' />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
        </InputField>
        <SubmitBtn>Sign up</SubmitBtn>
      </Form>
      <Note>
        <p>Already have an account?</p>
        <button onClick={switchForm} >Log in</button>
      </Note>
    </>
  )
}

export default RegisterForm