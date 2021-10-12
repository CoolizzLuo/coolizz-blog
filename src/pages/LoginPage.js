
import { toast } from 'react-toastify'

const LoginPage = () => {
  const test = () => {
    toast.success('Update Cart mount')
  }

  return (
    <>
      <h1>login page</h1>
      <button onClick={test}>toast</button>
    </>
  )
}

export default LoginPage
