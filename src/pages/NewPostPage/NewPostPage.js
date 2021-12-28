import styled from '@emotion/styled'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { toast } from 'react-toastify'

import axios from '../../commons/axios'


const Wrapper = styled.div`
  margin: 2rem auto 0;
  padding: 1rem;
  max-width: 760px;
  border: 1px solid #111;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 1px, rgb(0 0 0 / 10%) 0px 1px 5px 1px;
`

const H2 = styled.h2`
  margin: 2rem 0 0;
  text-align: center;
`

const Form = styled.form`
  margin: 1.5rem 0 1rem;
`

const Label = styled.label`
  text-align: left;
  display: block;
`


const Input = styled.input`
  min-width: 100%;
  max-width: 100%;
  margin: .2rem 0 1rem;
  padding: .6rem;
  margin: .8rem 0 2rem;
  font-size: 1rem;
  background: #ddd;
  border: none;
  border-radius: 12px;
  outline: none;
`


const Textarea = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  min-height: 240px;
  padding: .6rem;
  margin: .8rem 0 2rem;
  font-size: 1rem;
  background: #ddd;
  border: none;
  border-radius: 12px;
  outline: none;
`

const SubmitBtn = styled.button`
  font-size: .9rem;
  padding: .3rem 1rem;
  width: 100%;
  margin-top: .5rem;
  /* background-color: #a29bfe; */
  background-color: #428bca;
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

const schema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
}).required()


const NewPostPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    const { title, content } = data

    toast.promise(
      axios.post('/login', { title, content }),
      {
        pending: 'Loading...',
        success: {
          render({ data }) {
            if (data.data?.ok !== 1) return data.data.message
            return 'Post Successful !'
          }
        },
        error: {
          render({ data }) {
            reset()
            return 'Post Fail !'
          }
        }
      }, { autoClose: 3000 }
    )
  }

  return (
    <Wrapper>
      <H2>Post an article</H2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Title:
          <Input
            type="text"
            placeholder="Please input title..."
            $danger={errors.title}
            {...register("title")}
          />
        </Label>
        <Label>
          Content:
          <Textarea
            placeholder='Please input content...'
            $danger={errors.content}
            {...register("content")}
          >
          </Textarea>
        </Label>
        <SubmitBtn>Submit</SubmitBtn>
      </Form>
    </Wrapper>
  )
}

export default NewPostPage
