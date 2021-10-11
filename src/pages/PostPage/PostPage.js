import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { getPostById } from '../../WebAPI'

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({})

  useEffect(() => {
    getPostById(id).then(posts => setPost(posts[0]))
  }, [id]);


  return (
    <>
      <h1>{post.title}</h1>
      <h3>post: { id }</h3>
      <p>{post.body}</p>
    </>
  )
}