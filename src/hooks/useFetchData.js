import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'

const fetchDataReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      }
    case 'FETCH_FAILED':
      return {
        ...state,
        data: { hits: [] },
        isError: true,
      }
    default:
      return state
  }
}

const useFetchData = ({ initialFetchUrl, initialData }) => {
  const [fetchUrl, setFetchUrl] = useState(initialFetchUrl)
  const [{ data, isLoading, isError }, dispatch] = useReducer(
    fetchDataReducer,
    {
      data: initialData,
      isLoading: false,
      isError: false,
    },
  )

  useEffect(() => {
    let didCancel = false

    const fetchData = async () => {
      dispatch({
        type: 'FETCH_INIT',
      })
      try {
        const response = await axios.get(fetchUrl)

        console.log('get response of fetchData', didCancel)
        if (!didCancel) {
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: {
              hits: response.data.hits,
            },
          })
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({
            type: 'FETCH_FAILED',
          })
        }
      }
    }

    fetchData()
    return () => {
      didCancel = true
    }
  }, [fetchUrl])

  return [
    {
      data,
      isLoading,
      isError,
    },
    setFetchUrl,
  ]
}

export default useFetchData
