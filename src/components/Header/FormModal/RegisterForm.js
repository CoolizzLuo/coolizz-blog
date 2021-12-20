import { useContext } from 'react'
import {
  H2,
  Form,
  InputField,
  InputLabel,
  Input,
  CheckboxField,
  CheckboxLabel,
  Checkbox,
  ErrorMsg,
  SubmitBtn,
  Note
} from './FormStyle'
import decode from 'jwt-decode'
import axios from '../../../commons/axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../context'
import { setAuthToken } from '../../../utils'


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
