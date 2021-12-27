import styled from '@emotion/styled/macro'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft as faLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight as faRight } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisH as faEtc } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

const PageUi = styled.ul`
  display: flex;
  justify-content: center;
  margin: .4rem 0;
`

const Li = styled.li`
  color: #428bca;
  font-size: .7rem;
  font-weight: 500;
  border: 1px solid transparent;
  width: 30px;
  height: 30px;
  line-height: 28px;
  text-align: center;
  user-select: none;
  margin-left: 8px;

  path {
    color: #428bca;
  }
`

const PageLi = styled(Li)`
  border: 1px solid #428bca;
  border-radius: 6px;
  box-shadow: 1px 1px #ccc;
  cursor: pointer;
  transition: transform .3s;


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

const Pagination = ({
  count,
  currPage = 1,
  setCurrPage,
  siblingCount = 0,
  boundaryCount = 1
}) => {
  const pageNumArray = Array.from({ length: count }, (_, i) => i + 1)
  const PageLiItem = ({ value }) => (
    <PageLi
      key={'page-' + value}
      $active={currPage === value}
      onClick={() => setCurrPage(value)}>
      {value}
    </PageLi>
  )

  return (
    <PageUi>
      <PageLi $hide={currPage <= 1} onClick={() => setCurrPage(value => --value)}>
        <FontAwesomeIcon icon={faLeft} />
      </PageLi>
      {count < 11 && pageNumArray.map((i) => <PageLiItem value={i} />)}
      {count >= 11 && (
        <>
          <PageLiItem value={1} />
          <PageLiItem value={2} />
          {!(currPage < 5) && <Li><FontAwesomeIcon icon={faEtc} /></Li>}
          {currPage < 5 && pageNumArray.slice(2, 5).map((i) => <PageLiItem value={i} />)}
          {currPage > count - 5 && pageNumArray.slice(count - 5, count).map((i) => <PageLiItem value={i} />)}
          {pageNumArray.slice(currPage - 2 > 0 ? currPage - 2 : 0, currPage + 1).map((i) => <PageLiItem value={i} />)}
          {!(currPage > count - 5) && <Li><FontAwesomeIcon icon={faEtc} /></Li>}
          <PageLiItem value={count - 1} />
          <PageLiItem value={count} />
        </>
      )}
      <PageLi $hide={currPage >= count} onClick={() => setCurrPage(value => ++value)}>
        <FontAwesomeIcon icon={faRight} />
      </PageLi>
    </PageUi>
  )
}

export default Pagination
