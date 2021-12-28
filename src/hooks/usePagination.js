import { useState, useMemo, useCallback } from 'react'

import Pagination from '../components/Pagination'


const usePagination = (data, initialPage = 1) => {
  const [currPage, setCurrPage] = useState(initialPage)
  const maxPage = useMemo(() => Math.ceil(data.length / 5), [data])
  const pageData = useMemo(() => {
    return data.slice((currPage - 1) * 5, currPage * 5)
  }, [data, currPage])

  const PaginationComponent = useCallback(() => (
    <Pagination
      pageSize={maxPage}
      currentPage={currPage}
      setCurrentPage={setCurrPage}
      siblingCount={0}
    />
  ), [maxPage, currPage])

  return { currPage, maxPage, pageData, PaginationComponent }
}

export default usePagination
