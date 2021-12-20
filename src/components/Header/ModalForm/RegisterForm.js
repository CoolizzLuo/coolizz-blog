import { useContext } from 'react'
import styled from '@emotion/styled/macro'
import decode from 'jwt-decode'
import axios from '../../../commons/axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
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
  margin: .75rem 0 .75rem;
`

const InputLabel = styled.div`
  font-size: .85rem;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: .7rem .7rem .5rem;
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
  padding: 1rem .7rem .4rem;
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
    box-shadow: 1px 1px 1px #ccc;
  }
  &:focus + ${InputLabel}, &:not(:placeholder-shown) + ${InputLabel} {
    color: #757575;
    transform: scale(0.75) translate(-18px, -18px);
  }
  ${({ $danger }) => $danger && `
    border-color: #f02849;
  `}
`

const CheckboxField = styled.div`
  position: relative;
  width: 100%;
  margin: 1.25rem 0 .75rem;
`

const CheckboxLabel = styled.label`
  display: grid;
  grid-template-columns: 1rem auto;
  gap: 0.5em;
  line-height: 1.2;
  font-size: 13px;
  color: #757575;
  font-weight: 500;
  margin: 10px 0px 25px;
  cursor: pointer;

  ${({ $danger }) => $danger && `
    color: #f02849;
  `}
`

const Checkbox = styled.input`
  transform: translate(3px, 3px);
`

const ErrorMsg = styled.p`
  font-size: .6rem;
  font-weight: 500;
  position: absolute;
  bottom: -.5rem;
  width: 100%;
  text-align: right;
  color: #f02849;
`

const SubmitBtn = styled.button`
  font-size: .9rem;
  padding: .3rem 1rem;
  width: 100%;
  margin-top: .5rem;
  background-color: #a29bfe;
  /* background-color: #1877f2; */
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
  &:hover {
    transform: scale(1.05);
  }
`

const Note = styled.div`
  display: flex;
  justify-content: center;
  p {
    color: #aaa;
  }

  button {
    position: relative;
    font-weight: 500;
    color: #a29bfe;
    /* color: #1877f2; */
    background: transparent;
    margin-left: 10px;
    border: none;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: #a29bfe;
      transition: width 1s .2s;
    }
    &:hover::after {
      width: 100%;
    }
  }
`

const schema = yup.object({
  nickname: yup.string().min(2).max(8).required(),
  username: yup.string().min(4).max(8).required(),
  password: yup.string().min(6).max(12).required(),
  confirmPassword: yup.string().min(6).max(12).required(),
  checkRules: yup.boolean().oneOf([true], '(must be required)'),
}).required()

const LoginForm = ({ toggleModal, switchForm }) => {
  const { setUser } = useContext(AuthContext)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

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
            placeholder="..."
            $danger={errors.nickname}
            {...register("nickname")}
          />
          <InputLabel>Nickname</InputLabel>
          {errors.nickname && <ErrorMsg>{errors.nickname.message}</ErrorMsg>}
        </InputField>
        <InputField>
          <Input
            type="text"
            placeholder="..."
            $danger={errors.username}
            {...register("username")}
          />
          <InputLabel>Username</InputLabel>
          {errors.username && <ErrorMsg>{errors.username.message}</ErrorMsg>}
        </InputField>
        <InputField>
          <Input
            type="password"
            placeholder="..."
            $danger={errors.password}
            {...register("password")}
          />
          <InputLabel>Password</InputLabel>
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
        </InputField>
        <InputField>
          <Input
            type="password"
            placeholder="..."
            $danger={errors.confirmPassword}
            {...register("confirmPassword")}
          />
          <InputLabel>Confirm Password</InputLabel>
          {errors.confirmPassword && <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>}
        </InputField>
        <CheckboxField>
          <CheckboxLabel $danger={errors.checkRules}>
            <Checkbox
              type="checkbox"
              $danger={errors.checkRules}
              {...register("checkRules")}
            />
            By creating account, you agree to accept our Privacy Policy, Terms
            of Service and Notification settings. {errors.checkRules && errors.checkRules.message}
          </CheckboxLabel>
        </CheckboxField>
        <SubmitBtn>Sing Up</SubmitBtn>
      </Form>
      <Note>
        <p>Already have an account?</p>
        <button onClick={switchForm} >Log in</button>
      </Note>
    </>
  )
}

export default LoginForm
