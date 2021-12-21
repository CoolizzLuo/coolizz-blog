import { useContext } from 'react'

import decode from 'jwt-decode'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { toast } from 'react-toastify'

import axios from '../../../commons/axios'
import useFetchData from '../../../hooks/useFetchData'
import { AuthContext } from '../../../context'
import { setAuthToken } from '../../../utils'
import {
  H2,
  Form,
  InputField,
  InputLabel,
  Input,
  ErrorMsg,
  SubmitBtn,
  Note
} from './FormStyle'


const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(6).max(18).required(),
}).required()

const LoginForm = ({ toggleModal, switchForm }) => {
  const { setUser } = useContext(AuthContext)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const [{ data, isLoading, isError }, setFetchUrl] = useFetchData({
    initialFetchUrl: 'https://student-json-api.lidemy.me/login',
    initialData: {
      hits: [],
    },
  });

  const onSubmit = async (data) => {
    const { username, password } = data

    toast.promise(
      axios.post('/login', { username, password }),
      {
        pending: 'Loading...',
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
      }, { autoClose: 3000 }
    )
  }

  return (
    <>
      <H2>Log into Blog</H2>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
