import { useContext } from 'react'
import styled from '@emotion/styled'
import decode from 'jwt-decode'
import axios from '../commons/axios'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import { AuthContext } from '../context'
import { setAuthToken } from '../utils'



const LoginWrapper = styled.div`
  display: flex;
  height: 70%;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  font-size: .8rem;
  width: 350px;
  padding: 1.5rem 1.5rem 2rem;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
`

const Label = styled.label`
  display: block;
  text-align: left;
  margin: .3rem 0;
`

const Input = styled.input`
  font-size: .75rem;
  padding: 7px 11px;
  margin-bottom: .2rem;
  outline: none;
  width: 100%;
  max-width: 100%;
  background-color: white;
  border: 1px #dbdbdb solid;
  border-radius: 4px;
  color: #363636;
  box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);

  ${({ $danger }) => $danger && `
    border-color: #fa7c91;
  `}
`

const ErrorMsg = styled.p`
  text-align: left;
  color: #fa7c91;
  font-weight: 300;
`

const Button = styled.button`
  font-size: .8rem;
  padding: 7px 16px;
  width: 100%;
  margin-top: .5rem;
  background-color: #a29bfe;
  border-color: transparent;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`

const LoginPage = ({ history }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
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
            setAuthToken(token)

            const tokenUser = decode(token)
            setUser(tokenUser.username)
            history.push('/')
            return `Hi, ${tokenUser.username} welcome` || 'Login success 👌'
          }
        },
        error: {
          render({ data }) {
            return data.response.data?.message || 'Login rejected 🤯'
          }
        }
      }
    )
  }

  return (
    <LoginWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Username</Label>
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
        </div>
        <div>
          <Label>Password</Label>
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
        </div>
        <Button>Login</Button>
      </Form>
    </LoginWrapper>
  )
}

export default LoginPage
