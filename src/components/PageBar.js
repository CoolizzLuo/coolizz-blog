import styled from '@emotion/styled/macro'


const PageUi = styled.ul`
  display: flex;
  justify-content: center;
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
  border: 1px solid #111;
  cursor: pointer;
  transition: background .3s;

  ${({ $active }) => $active && `
    color: #eee;
    background: #999;
    border-color: #ccc;
  `}

  &:hover {
    color: #eee;
    background: #999;
    border-color: #ccc;
  }
`


const PageBar = ({ count, currPage, setCurrPage }) => {
  const pageArr = Array(count).fill()
  return (
    <PageUi>
      {currPage > 1 && <PageLi onClick={() => setCurrPage(prePage => --prePage)}>&lt;</PageLi>}
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
      {currPage < count && <PageLi onClick={() => setCurrPage(prePage => ++prePage)}>&gt;</PageLi>}
    </PageUi>
  )
}

export default PageBar
