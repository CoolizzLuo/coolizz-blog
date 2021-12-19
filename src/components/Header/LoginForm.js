import { useContext } from 'react'
import styled from "@emotion/styled/macro";
import decode from 'jwt-decode'
import axios from '../../commons/axios'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import { AuthContext } from '../../context'
import { setAuthToken } from '../../utils'


const Wrapper = styled.div`
  font-size: .8rem;
  width: 350px;
  padding: 1.5rem 1.25rem 1.25rem;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
`

const H2 = styled.h2`
  text-align: center;
`

const Form = styled.form`
  margin: .5rem 0 1rem;
`

const Divider = styled.div`
  margin: 1rem 0;
  weight: 100%;
  height: 1px;
  background: #ccc;
`

const InputField = styled.div`
  position: relative;
  width: 100%;
  margin: 1rem 0 .2rem;
`

const InputTitle = styled.div`
  font-size: .8rem;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: .5rem .7rem;
  color: #757575;
  transition: transform 0.1s;
  pointer-events: none;
`

const Input = styled.input`
  font-size: .9rem;
  width: 100%;
  border: 1px #dbdbdb solid;
  border: None;
  border-radius: 5px;
  padding: .8rem .7rem .2rem;
  outline: none;
  letter-spacing: 0.5px;
  background: #f1f5ff;
  color: #363636;
  box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);

  &:placeholder-shown::placeholder {
    color: transparent;
  }

  &:focus + ${InputTitle}, &:not(:placeholder-shown) + ${InputTitle} {
    transform: scale(0.7) translate(-14px, -20px);
  }

  ${({ $danger }) => $danger && `
    border-color: #f02849;
  `}
`

const ErrorMsg = styled.p`
  text-align: left;
  color: #f02849;
  font-weight: 300;
`

const SingInBtn = styled.button`
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

const SingUpBtn = styled.button`
  display: block;
  font-size: .7rem;
  padding: .2rem 1rem;
  margin: 0 auto;
  border-color: transparent;
  border-radius: 6px;
  color: #fff;
  background: #42b72a;
  box-shadow: 1px 1px 1px #666;
  cursor: pointer;
  transition: all .3s;

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`


const LoginForm = ({ handleToggle }) => {
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
            handleToggle()
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
    <Wrapper>
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
          {errors.username && <ErrorMsg>{errors.username.message}</ErrorMsg>}
          <InputTitle children='Username' />
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
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          <InputTitle children='Password' />
        </InputField>
        <SingInBtn>Log In</SingInBtn>
      </Form>
      <Divider />
      <SingUpBtn>Create new account</SingUpBtn>
    </Wrapper>
  )
}

export default LoginForm