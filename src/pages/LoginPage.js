import Layout from '../components/Layout'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const test = () => {
    toast.success('Update Cart mount')
  }

  return (
    <Layout>
      <h1>login page</h1>
      <button onClick={test}>toast</button>
    </Layout>
  )
}

export default LoginPage
