import styled from '@emotion/styled/macro'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft as faLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight as faRight } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

const PageUi = styled.ul`
  display: flex;
  justify-content: center;
  margin: .4rem 0;
`

const Li = styled.li`
  font-size: .7rem;
  font-weight: 500;
  border: 1px solid transparent;
  width: 30px;
  height: 30px;
  line-height: 28px;
  text-align: center;
  user-select: none;
  margin-left: 8px;
`

const PageLi = styled(Li)`
  color: #428bca;
  border: 1px solid #428bca;
  border-radius: 6px;
  box-shadow: 1px 1px #ccc;
  cursor: pointer;
  transition: transform .3s;

  path {
    color: #428bca;
  }

  ${({ $active }) => $active && `
    color: #eee;
    background: #428bca;
    border-color: #eee;
    transform: translate(0px, -2px);
    path {
      color: #eee;
    }
  `}

  &:hover {
    color: #eee;
    background: #428bca;
    border-color: #eee;
    path {
      color: #eee;
    }
  }

  ${({ $hide }) => $hide && `
    visibility: hidden;
  `}
`


const PageLiItem = () => {
  return (
    <>

    </>
  )
}

const Pagination = ({ count, currPage = 1, setCurrPage, siblingCount = 0 }) => {
  const pageArr = Array(count).fill()
  const handleTurnPage = action => {
    const obj = {
      previous: value => --value,
      next: value => ++value
    }
    return obj[action]
  }
  return (
    <PageUi>
      <PageLi $hide={currPage <= 1} onClick={() => setCurrPage(handleTurnPage('previous'))}>
        <FontAwesomeIcon icon={faLeft} />
      </PageLi>
      {
        pageArr.map((i, index) => (
          <PageLi
            key={'page-' + index}
            $active={currPage === index + 1}
            onClick={() => setCurrPage(index + 1)}>
            {index + 1}
          </PageLi>
        ))
      }
      <PageLi $hide={currPage >= count} onClick={() => setCurrPage(handleTurnPage('next'))}>
        <FontAwesomeIcon icon={faRight} />
      </PageLi>
    </PageUi>
  )
}

export default Pagination
