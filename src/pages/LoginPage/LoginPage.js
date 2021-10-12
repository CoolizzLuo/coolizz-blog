import { toast } from 'react-toastify'



export default function Login() {
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