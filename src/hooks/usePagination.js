import { useState, useMemo, useCallback } from 'react'

import Pagination from '../components/Pagination'


const usePagination = ({
  initialPage = 1,
  data
}) => {
  const [currPage, setCurrPage] = useState(initialPage)
  const maxPage = useMemo(() => Math.ceil(data.length / 5), [data])
  const pageData = useMemo(() => {
    return data.slice((currPage - 1) * 5, currPage * 5)
  }, [data, currPage])

  const PageBar = () => <Pagination count={maxPage} currPage={currPage} setCurrPage={setCurrPage} />

  return [{ currPage, maxPage, pageData }, PageBar]
}